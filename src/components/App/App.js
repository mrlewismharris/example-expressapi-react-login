import Login from 'components/Login/Login';
import Prefs from 'components/Prefs/Prefs';
import Userpage from 'components/Userpage/Userpage';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import useToken from './useToken';

function App() {
  const {token, setToken} = useToken();

  if (!token) {
    return <Login setToken={setToken} />
  }

  return (
    <div className="wrapper">
      <h1>React Login with Express</h1>
      <BrowserRouter>
        <Switch>
          <Route path="/userpage">
            <Userpage />
          </Route>
          <Route path="/prefs">
            <Prefs />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App;