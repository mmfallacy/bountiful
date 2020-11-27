> This repository contains the source code for the front-end prototype of _Bountiful_. It serves as our official submission for [HackFest 2020: Online](https://hackfest.dscadmu.org), a 48-hour hackathon organized by the Developer Student Club (DSC) Loyola.

# Bountiful
_Bountiful_ is a competitive e-commerce platform that puts customers at the forefront of every business model. Unlike most e-commerce platforms, Bountiful does not concern itself with connecting "buyers" to the "sellers". Here, it is the other way around. At Bountiful, we connect the sellers to the buyers.

## The Inverted Interaction
Traditional e-commerce plaforms (such as [Lazada](https://www.lazada.com.ph) and [Carousell](https://www.carousell.ph)) rely on a model where sellers post public listings of their products online. That is to say, it is up to the user to manually search for the best deals from the most trusted sellers.

At Bountiful, we turn this concept on its head. It is now up to the user to post a public listing that expresses their _request_ for a specific product. By inverting this fundamental interaction, the sellers must now compete against each other by directly _offering_ the best deals to the user.

For instance, let us suppose a certain user "Juan dela Cruz". Juan is looking for a pair of black sneakers. In a traditional e-commerce platform, Juan would have to manually search the platform's database for the best deal. At Bountiful, Juan would only need to post a listing. Juan would provide the appropriate images, descriptions, and budget range for his requested product. After this point, the sellers at the platform would compete to offer Juan the best deals. This is analogous to an auction bidding. Once Juan is happy with a deal, he would mark his listing as "done".

> **DISCLAIMER:** Messengers and communication channels are beyond the scope of this application. This is why all users must provide their contact details in their respective profiles.

It is worth noting here that Juan, the customer, did not have to exert much effort in finding the best deal. This inverted interaction is exactly what "puts customers at the forefront of every business model". At Bountiful, the customer is treated with utmost priority. This is the hook that invites more users into our platform.

## The Feed

## The Rating System

# In Relation to the "New Normal"
The Internet has proven itself to be an integral aspect of the modern lifestyle. Despite the disruptive consequences of a global pandemic, the Internet has further cemented its role as the unifying force that keeps the world connected.

# Building from Source
The front-end prototype was developed with [Node.js v15](https://nodejs.org/en/blog/release/v15.3.0/) using the [React framework](https://reactjs.org) for JavaScript. Instead of NPM, we used [Classic Yarn](https://classic.yarnpkg.com/lang/en/) as our package manager.

Assuming that both Node.js and Yarn have been installed, the project can be hosted locally using the commands below:
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
