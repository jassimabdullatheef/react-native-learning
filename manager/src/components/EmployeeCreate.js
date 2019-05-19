import React, { Component } from 'react'
import { Picker, Text } from 'react-native'
import { connect } from 'react-redux'
import { Card, CardSection, Input, Button } from './common'

import { employeeUpdate, employeeCreate } from '../actions'

class EmployeeCreate extends Component {
  constructor(props) {
    super(props)

    this.onButtonPress = this.onButtonPress.bind(this)
  }
  onButtonPress() {
    const { name, phone, shift, employeeCreate } = this.props

    employeeCreate({ name, phone, shift: shift || 'Monday' })
  }
  render() {
    const { name, phone, shift, employeeUpdate } = this.props
    return (
      <Card>
        <CardSection>
          <Input
            onChangeText={value => employeeUpdate({ prop: 'name', value })}
            label="Name"
            placeholder="Jane"
            value={name}
          />
        </CardSection>
        <CardSection>
          <Input
            onChangeText={value => employeeUpdate({ prop: 'phone', value })}
            label="Phone"
            placeholder="555-555-5555"
            value={phone}
          />
        </CardSection>
        <CardSection style={{ flexDirection: 'column' }}>
          <Text style={styles.pickerTextStyle}>Select Shift</Text>
          <Picker
            style={{ flex: 1 }}
            selectedValue={shift}
            onValueChange={value => employeeUpdate({ prop: 'shift', value })}>
            <Picker.Item label="Monday" value="Monday" />
            <Picker.Item label="Tuesday" value="Tuesday" />
            <Picker.Item label="Wednesday" value="Wednesday" />
            <Picker.Item label="Thursday" value="Thursday" />
            <Picker.Item label="Friday" value="Friday" />
            <Picker.Item label="Saturday" value="Saturday" />
            <Picker.Item label="Sunday" value="Sunday" />
          </Picker>
        </CardSection>
        <CardSection>
          <Button onPress={this.onButtonPress}>Create</Button>
        </CardSection>
      </Card>
    )
  }
}

const styles = {
  pickerTextStyle: {
    fontSize: 18,
    paddingLeft: 20
  }
}

const mapStateToProps = state => {
  const { name, phone, shift } = state.employeeForm

  return { name, phone, shift }
}

export default connect(
  mapStateToProps,
  { employeeUpdate, employeeCreate }
)(EmployeeCreate)
