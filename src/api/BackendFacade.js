import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

/**
 * @typedef {Object} User
 * @property {string} uid - Unique ID of the user 
 * @property {string} name - Display name of the user
 * @property {string} email - Google email of the user
 * @property {string} bio - Bio description of the user
 * @property {number} karma - Rating of the user from 0.0 to 1.0
 * @property {string[]} listings - Array of listing IDs posted by the user
 * @property {string} pfp - URL to the profile picture
 */

/**
 * @typedef {Object} Listing
 * @property {string} id
 * @property {string} author - user ID of the person who posted the listing
 * @property {number} price
 * @property {string} title
 * @property {string} description
 * @property {string} photo
 */

export class BackendFacade {
  /**
   * @param {Object} credentials - This represents the JSON containing the
   * Google Cloud Platform credentials.
   * @see Firebase Documentation {@link https://firebase.google.com/docs/reference/js/firebase#initializeapp}
   */
  constructor(credentials) {
    /** @type {firebase.app.App} */
    this._app = firebase.initializeApp(credentials);
    /** @type {User|null} */
    this._user = null;
  }

  /** @returns {User|null} */
  get user() { return this._user; }

  /** @returns {Promise<User>} */
  async signInWithGoogle() {
    // Log the user in
    const provider = new firebase.auth.GoogleAuthProvider();
    const auth = this._app.auth();
    await auth.signInWithRedirect(provider);

    // Extract user information
      const {
          uid,
          displayName: name,
          email,
          photoURL: pfp
      } = auth.currentUser;

    // Check if the user already exists
    const db = this._app.firestore();
    const collection = db.collection('users');
    const snapshot = await collection.where('uid', '==', uid).get();
    if (snapshot.empty) {
      this._user = {
          uid,
          name,
          email,
          // TODO: Implement proper way of editing bio
          bio: "Lorem ipsum",
          // TODO: Implement proper rating system
          karma: Math.random(),
          listings: [],
          pfp,
      };
      await collection.add(this._user);
    } else
      // @ts-expect-error
      this._user = snapshot.docs[0].data();

    return this._user;
  }

  /** @returns {Promise<void>} */
  signOut() {
    this._user = null;
    return this._app.auth().signOut();
  }

  /** @returns {Promise<Listing[]>} */
  async retrieveAllListings() {
    const db = this._app.firestore();
    const snapshot = await db.collection('listings').get();
    /** @type {Listing[]} */
    // @ts-expect-error
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  }

  /**
   * @param {string[]} ids
   * @returns {Promise<Listing[]>}
   */
  async retrieveMultipleListingsById(ids) {
    const db = this._app.firestore();
    const DOC_ID = firebase.firestore.FieldPath.documentId();
    const snapshots = await db.collection('listings').where(DOC_ID, 'in', ids).get();
    // @ts-expect-error
    return snapshots.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  }

  /**
   * @param {string} uid
   * @returns {Promise<User>}
   */
  async retrieveUserById(uid) {
    const db = this._app.firestore();
    const snapshot = await db.collection('users').where('uid', '==', uid).get();
    if (snapshot.empty)
      throw new Error('The user does not exist!');

    /** @type {User} */
    // @ts-expect-error 
    return snapshot.docs[0].data();
  }

  /**
   * @param {string[]} uids
   * @returns {Promise<User[]>}
   */
  async retrieveMultipleUsersById(uids) {
    const db = this._app.firestore();
    const snapshots = await db.collection('users').where('uid', 'in', uids).get();

    // @ts-expect-error
    return snapshots.docs.map(doc => doc.data());
  }

  /**
   * @param {string} title
   * @param {string} description
   * @param {number} price
   * @param {string} photo - Data URL of the photo uploaded
   * @returns {Promise<Listing>}
   */
  async createListing(title, description, price, photo) {
    const user = this.user;
    if (!user)
      throw new Error('There is no user logged in!');

    // Add listing to the database
    const db = this._app.firestore();
    /** @type {Omit<Listing, 'id'>} */
    const listing = {
        author: user.uid,
        title,
        description,
        price,
        photo,
    };
    const listingSnapshot = await db.collection('listings').add(listing);
    const doc = await listingSnapshot.get();

    // Add reference of the new listing to the current user
    const userSnapshot = await db.collection('users').where('uid', '==', this._user.uid).get();
    this._user.listings.push(listingSnapshot.id);
    await userSnapshot.docs[0].ref.update('listings', this._user.listings);

    // @ts-expect-error
    return {
      id: listingSnapshot.id,
      ...doc.data(),
    }
  }
}
