import React, { useState } from 'react';
import { BrowserRouter, Redirect, Route } from 'react-router-dom';
import Login from './pages/Login/Login';
import Main from './pages/Main/Main';

function App() {
  const [isLoggedIn, setLoggedIn] = useState<boolean>(false)
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
        component={Login}
      />
    </BrowserRouter>
  );
}

export default App;
