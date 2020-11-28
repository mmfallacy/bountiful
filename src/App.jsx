import React, { useState } from 'react';
import { BrowserRouter, Redirect, Route } from 'react-router-dom';

import {Login, Main, NewOffer, NewRequest, Test} from './pages/index';


const mockProductListing = [ {
  imgSrc: "https://via.placeholder.com/150",
  name: "Blackwqe",
  budget: 120,
  id:1
},
{
  imgSrc: "https://via.placeholder.com/150",
  name: "Black 222Lamp",
  budget: 120,
  id:2
},
{
  imgSrc: "https://via.placeholder.com/150",
  name: "Black ggaLamp",
  budget: 120,
  id:3
},
{
  imgSrc: "https://via.placeholder.com/150",
  name: "Bla2ck Lamp",
  budget: 120,
  id:4
}]

function App() {
  const [isLoggedIn, setLoggedIn] = useState(true)
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
          : <Login />
        }
      />
      <Route
        path="/myrequests"

      />
      <Route
        path="/listing/:productId/newoffer"
        component={(props)=>{
          const productId = parseInt(props.match.params.productId)
          const productObj = mockProductListing.filter((el)=>el.id===productId)[0]
          if (!productObj) return <Redirect to="/" />
          return <NewOffer productObj={productObj} />
        }}
      />
      <Route
        path="/newlisting/:productId"
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
