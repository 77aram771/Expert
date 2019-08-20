/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import allReducers from './reducers';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import Counter from './components/counter.js';


const store = createStore(allReducers);

export default class App extends Component{
  render(){
    return(
        <Provider store= {store}>
          <Counter />
        </Provider>
    );
  }
}


