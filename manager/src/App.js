import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import firebase from 'firebase'
import ReduxThunk from 'redux-thunk'

import Router from './Router'

import reducer from './reducers/index'

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyDEX95kBvB6hQwxgmL4AajIlRqYwiulV-g',
      authDomain: 'manager-48ef9.firebaseapp.com',
      databaseURL: 'https://manager-48ef9.firebaseio.com',
      projectId: 'manager-48ef9',
      storageBucket: 'manager-48ef9.appspot.com',
      messagingSenderId: '8344951598',
      appId: '1:8344951598:web:a7f4d7049b8b56f6'
    }

    firebase.initializeApp(config)
  }

  render() {
    return (
      <Provider store={createStore(reducer, {}, applyMiddleware(ReduxThunk))}>
        <Router />
      </Provider>
    )
  }
}

export default App
