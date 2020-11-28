import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

/** @typedef {Object} User */
/** @property {string} uid - Unique ID of the user */
/** @property {string} name - Display name of the user */
/** @property {string} email - Google email of the user */
/** @property {string} bio - Bio description of the user */
/** @property {string} pfp - URL to the profile picture */

class BackendFacade {
  /**
   * @param {Object} credentials - This represents the JSON containing the
   * Google Cloud Platform credentials.
   */
  constructor(credentials) {
    /** @type {firebase.app.App} */
    this._app = firebase.initializeApp(credentials);
    /** @type {User|null} */
    this._user = null;
  }

  /** @returns {firebase.User|null} */
  get user() { return this._user; }

  /** @returns {Promise<User>} */
  async signInWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    const auth = this._app.auth();
    await auth.signInWithRedirect(provider);
    const user = auth.currentUser;
    this._user = {
        uid: user.uid,
        name: user.displayName,
        email: user.email,
        bio: "Lorem ipsum.",
        pfp: user.photoURL,
    };
    return this._user;
  }

  signOut() {
      this._user = null;
      return this._app.auth().signOut();
  }
}
