import React, { Component } from "react";
import { View } from "react-native";
import firebase from "firebase";

import { Header, Button, Spinner } from "./components/common";
import LoginForm from "./components/LoginForm";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loggedIn: null
    };

    this.onButtonPress = this.onButtonPress.bind(this);
  }

  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyDS0r6PVppxtIFm85yUK9rSOUacPif9rYo",
      authDomain: "auth-e1faf.firebaseapp.com",
      databaseURL: "https://auth-e1faf.firebaseio.com",
      projectId: "auth-e1faf",
      storageBucket: "auth-e1faf.appspot.com",
      messagingSenderId: "202981079721",
      appId: "1:202981079721:web:76b28caea30a5f65"
    });

    firebase.auth().onAuthStateChanged(user => {
      this.setState({ loggedIn: !!user });
    });
  }

  onButtonPress() {
    firebase.auth().signOut();
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
            <Button onPress={this.onButtonPress}>Logout</Button>
        );
      case false:
        return <LoginForm />;
      default:
        return <Spinner />;
    }
  }

  render() {
    return (
      <View>
        <Header title="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;
