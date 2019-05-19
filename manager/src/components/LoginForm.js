import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
import { emailChanged, passwordChanged, loginUser } from '../actions'
import { Card, CardSection, Input, Button, Spinner } from './common'

class LoginForm extends Component {
  constructor(props) {
    super(props)

    this.onEmailChange = this.onEmailChange.bind(this)
    this.onPasswordChange = this.onPasswordChange.bind(this)
    this.onLoginButtonPress = this.onLoginButtonPress.bind(this)
  }

  onEmailChange(text) {
    this.props.emailChanged(text)
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text)
  }

  onLoginButtonPress() {
    const { email, password } = this.props
    this.props.loginUser({ email, password })
  }

  renderError() {
    if (this.props.error) {
      return (
        <View style={{ backgroundColor: 'white' }}>
          <Text style={styles.errorTextStyle}>{this.props.error}</Text>
        </View>
      )
    }
  }

  renderButton() {
    if (this.props.loading) {
      return <Spinner />
    } else {
      return <Button onPress={this.onLoginButtonPress}>Login</Button>
    }
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            value={this.props.email}
            label="Email"
            placeholder="email@gmail.com"
            onChangeText={this.onEmailChange}
          />
        </CardSection>
        <CardSection>
          <Input
            value={this.props.password}
            label="Password"
            placeholder="password"
            secureTextEntry
            onChangeText={this.onPasswordChange}
          />
        </CardSection>
        {this.renderError()}
        <CardSection>{this.renderButton()}</CardSection>
      </Card>
    )
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
}

const mapStateToProps = state => ({
  email: state.auth.email,
  password: state.auth.password,
  loading: state.auth.loading,
  error: state.auth.error
})

export default connect(
  mapStateToProps,
  { emailChanged, passwordChanged, loginUser }
)(LoginForm)
