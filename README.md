> This repository contains the source code for the front-end prototype of _Bountiful_. It serves as our official submission for [HackFest 2020: Online](https://hackfest.dscadmu.org), a 48-hour hackathon organized by the Developer Student Club (DSC) Loyola.

# Bountiful
_Bountiful_ is a competitive e-commerce platform that puts customers at the forefront of every business model. Unlike most e-commerce platforms, Bountiful does not concern itself with connecting "buyers" to the "sellers". Here, it is the other way around. At Bountiful, we connect the sellers to the buyers.

## The Inverted Interaction
Traditional e-commerce plaforms (such as [Lazada](https://www.lazada.com.ph) and [Carousell](https://www.carousell.ph)) rely on a model where sellers post public listings of their products online. That is to say, it is up to the user to manually search for the best deals from the most trusted sellers.

At Bountiful, we turn this concept on its head. It is now up to the user to post a public listing that expresses their _request_ for a specific product. By inverting this fundamental interaction, the sellers must now compete against each other by directly _offering_ the best deals to the user.

For instance, let us suppose a certain user "Juan dela Cruz". Juan is looking for a pair of black sneakers. In a traditional e-commerce platform, Juan would have to manually search the platform's database for the best deal. At Bountiful, Juan would only need to post a listing. Juan would provide the appropriate images, descriptions, and budget range for his requested product. After this point, the sellers at the platform would compete to offer Juan the best deals. This is analogous to bounties and auction biddings. Once Juan is happy with a deal, he would mark his listing as "done".

> **DISCLAIMER:** Messengers and communication channels are beyond the scope of this application. This is why all users must provide their contact details in their respective profiles.

It is worth noting here that Juan, the customer, did not have to exert much effort in finding the best deal. This inverted interaction is exactly what "puts customers at the forefront of every business model". At Bountiful, the customer is treated with utmost priority. This is the hook that invites more users into our platform.

## The Feed
To more effectively connect sellers to their buyers, we implemented a simple "request feed" at the main user dashboard. The feed contains popular listings filtered by the user's preferences. A seller may, for example, configure their feed to only show requests tagged with the keywords `technology` and `laptop`. This tailors the seller's app experience according to their current inventory.

## The Rating and Review System
As a rudimentary measure of content moderation, each seller must maintain a satisfactory overall rating. Customers may leave public reviews on a seller's profile based on their experience.

## In Relation to the "New Normal"
The pervasive consequences of a global pandemic have further cemented technology as an integral aspect of the modern lifestyle. In traversing this "New Normal", we must rely on the power of technology to keep us connected despite the implementation of social distancing measures.

With that said, Bountiful provides a competitive digital platform for empowering the customer as the utmost priority. In the "New Normal", gone are the days when customers have to manually search for the best deals themselves—such as in the case of malls and traditional e-commerce platforms. At Bountiful, modern technology allows us to foster a platform where the customer is treated like royalty. After all, the Filipino people deserve no less.

# Building from Source
The front-end prototype was developed with [Node.js v15](https://nodejs.org/en/blog/release/v15.3.0/) using the [React framework](https://reactjs.org) for JavaScript. Instead of NPM, we used [Classic Yarn](https://classic.yarnpkg.com/lang/en/) as our package manager.

Note that some of our dependencies make use of native Node modules. These require [Python 2](https://www.python.org/downloads/release/python-2718/) and some platform-specific build toolchains in order to compile successfully. Please consult the [`node-gyp` documentation](https://github.com/nodejs/node-gyp#installation) for more information.

Assuming that all prerequisites have been installed, the project can be hosted locally using the commands below:
```bash
# Clone the Git repository
git clone https://github.com/mmfallacy/bountiful.git

# Pull in project dependencies
yarn install

# Host the app locally in development mode
# at http://localhost:3000
yarn start
```

Alternatively, running `yarn build` automatically builds the project in production mode, wherein all assets are minified and optimized for deployment. The compilation can be found in the resulting `build/` folder.

# The Team: displayFlex
* DAYAG, Van Paul Angelo C.
* LAPITAN, Garth Hendrich C.
* MONASTERIAL, Michael Angelo L.
* ORTIZ, Sebastian Luis S.
