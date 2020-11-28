import React, { useState } from 'react';
import { BrowserRouter, Redirect, Route } from 'react-router-dom';
import Login from './pages/Login/Login';
import Main from './pages/Main/Main';
import NewRequest from './pages/NewRequest/NewRequest';


function App() {
  const [isLoggedIn, setLoggedIn] = useState(true)
  return (
    <BrowserRouter>
      <Route 
        exact
        path="/"
        render={()=>
          isLoggedIn?
          <NewRequest />
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
    </BrowserRouter>
  );
}

export default App;
