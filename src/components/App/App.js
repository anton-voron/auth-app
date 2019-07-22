import React, {Component} from 'react';
import './App.css';

import LoginAPI from '../../service/LoginAPI.js';
import {LoginProvider} from '../LoginDataContext/LoginDataContext.js';
import {RegPage} from '../context-component/withContextAPI.js';


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
      <LoginProvider value={loginAPI}>
        <RegPage />
      </LoginProvider>
    );
  }
}

export default App;
