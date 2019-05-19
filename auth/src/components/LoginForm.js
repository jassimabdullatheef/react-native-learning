import React, { Component } from "react";
import { Text } from "react-native";
import firebase from "firebase";

import { Card, CardSection, Button, Input, Spinner } from "./common";

class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = { email: "", password: "", error: "", submitting: false };
    this.onButtonPress = this.onButtonPress.bind(this);
    this.onLoginSuccess = this.onLoginSuccess.bind(this);
    this.onLoginFail = this.onLoginFail.bind(this);
  }

  renderButton() {
    if (this.state.submitting) {
      return <Spinner size="small" />;
    }

    return <Button onPress={this.onButtonPress}>Login</Button>;
  }

  onButtonPress() {
    const { email, password } = this.state;

    this.setState({ error: "", submitting: true });

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(this.onLoginSuccess())
      .catch(() => {
        firebase
          .auth()
          .createUserWithEmailAndPassword(email, password)
          .then(this.onLoginSuccess())
          .catch(this.onLoginFail());
      });
  }

  onLoginSuccess() {
    this.setState({
      email: "",
      password: "",
      error: "",
      submitting: false
    });
  }

  onLoginFail() {
    this.setState({
      error: "Authentication Failed.",
      submitting: false
    });
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Email"
            value={this.state.email}
            placeholder="user@gmail.com"
            onChangeText={email => this.setState({ email })}
          />
        </CardSection>
        <CardSection>
          <Input
            label="Password"
            value={this.state.password}
            placeholder="password"
            secureTextEntry
            onChangeText={password => this.setState({ password })}
          />
        </CardSection>
        <Text style={style.errorText}>{this.state.error}</Text>
        <CardSection>{this.renderButton()}</CardSection>
      </Card>
    );
  }
}

const style = {
  errorText: {
    fontSize: 20,
    alignSelf: "center",
    color: "red"
  }
};

export default LoginForm;
