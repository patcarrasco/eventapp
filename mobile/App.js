import React, {Component} from 'react';
import {Root} from './src/config/router'

import configureStore from './src/store/configureStore'
import {Provider} from 'react-redux'

// const store = configureStore()

export default class App extends Component {
  render() {
    return (
      <Root />
    );
  }
}

