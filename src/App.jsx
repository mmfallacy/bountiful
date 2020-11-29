import React, { useState } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

import {
  Login, Main, NewOffer, 
  NewRequest, Test, MyRequests, MyOffers,
  MyProfile, SellerProfile,
  MyRequestDetails, MyOfferDetails
} from './pages';

import {useAPI} from './store'

const mockProductListing = [ {
  imgSrc: "https://via.placeholder.com/150",
  name: "Blackwqe",
  budget: 120,
  id:'1'
},
{
  imgSrc: "https://via.placeholder.com/150",
  name: "Black 222Lamp",
  budget: 120,
  id:'2'
},
{
  imgSrc: "https://via.placeholder.com/150",
  name: "Black ggaLamp",
  budget: 120,
  id:'3'
},
{
  imgSrc: "https://via.placeholder.com/150",
  name: "Bla2ck Lamp",
  budget: 120,
  id:'4'
}]

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false)

  const API = useAPI(state=>state.instance)

  const loginHandler = () => {
    const User = API._user
    console.table(User)
    if(User) setLoggedIn(true)
    else alert("Failed to log in!")
  }
  return (
    <BrowserRouter>
      <Route 
        exact
        path="/"
        render={()=>
          isLoggedIn?
          <Main />
          : <Redirect to="/login" />
        }
      />
      <Route
        exact
        path="/login"
        render={()=>
          isLoggedIn?
          <Redirect to="/"/>
          : <Login onLogin={loginHandler}/>
        }
      />
      <Switch>
        <Route
          path="/myaccount/listing/:productId"
          component = {MyRequestDetails}
        />
        <Route
          path="/myaccount/listings"
          component={MyRequests}
        />
        <Route
          path="/myaccount/offer/:productId"
          component={MyOfferDetails}
        />
        <Route
          path="/myaccount/offers"
          component={MyOffers}
        />
        <Route
          path="/myaccount"
          component={MyProfile}
        />
      </Switch>

      <Route
        path="/account/:uid"
        component={SellerProfile}
      />
      <Route
        path="/listing/:productId/newoffer"
        component={NewOffer}
      />
      <Route
        path="/newlisting"
        component={NewRequest}
      />
      <Route
        path="/testing"
        component={Test}
      />
    </BrowserRouter>
  );
}

export default App;
