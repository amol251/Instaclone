import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import RouterComponent from './Route';
import React, { Component } from 'react';

function todos(state = [], action) {
  switch (action.type) {
    case 'ADD_TODO':
      return state.concat([action.text])
    default:
      return state
  }
}

const store = createStore(todos, ['Use Redux'])

export default class App extends Component {
  render() {
      return (
        <Provider store ={store}>
          <RouterComponent />
        </Provider>
      );
    }
}
