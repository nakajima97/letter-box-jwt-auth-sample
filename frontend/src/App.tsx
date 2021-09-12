import React from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Login from './components/Login'
import UserInfo from './components/UserInfo'
import NotFound from './components/NotFound'
import SignUp from './components/SignUp';

import { ErrorProvider } from './context/Error'

function App() {
  return (
    <ErrorProvider>
      <Router>
        <Switch>
          <Route path='/' exact>
            <Login />
          </Route>
          <Route path='/sign-up'>
            <SignUp />
          </Route>
          <Route path='/user-info'>
              <UserInfo />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </ErrorProvider>
  );
}

export default App;
