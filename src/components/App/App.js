import React, {Component} from 'react';
import './App.css';

import LoginAPI from '../../service/LoginAPI.js';
import {LoginProvider} from '../LoginDataContext/LoginDataContext.js';
import {RegPage, VacPage, UserPage} from '../context-component/withContextAPI.js';


import { HashRouter , Route } from 'react-router-dom';

class App extends Component {
  constructor () {
    super();
    this.state = {
      loginAPI: new LoginAPI()
    }
  }

  render() {
    const {loginAPI} = this.state;
    return (
      <HashRouter>
        <LoginProvider value={loginAPI}>
          <Route path="/" exact={true} render={() => <RegPage /> } />
          <Route path="/vacancy/" exact={true} render={() => <VacPage /> } />
          <Route path="/user-page/" exact={true} render={() => <UserPage /> } />
        </LoginProvider>
      </HashRouter>
    );
  }
}

export default App;
