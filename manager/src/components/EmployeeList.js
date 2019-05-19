import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text, ListView } from 'react-native'
import { map } from 'lodash'

import EmployeeListItem from './EmployeeListItem'

import { fetchEmployees } from '../actions'

class EmployeeList extends Component {
  componentWillMount() {
    this.props.fetchEmployees()
    this.createDataSource(this.props)
  }

  componentWillReceiveProps(nextProps) {
    this.createDataSource(nextProps)
  }

  createDataSource({ employees }) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    })

    this.dataSource = ds.cloneWithRows(employees)
  }

  renderRow(employee) {
    return <EmployeeListItem employee={employee} />
  }

  render() {
    console.log(this.props)
    return (
      <ListView
        enableEmptySections
        dataSource={this.dataSource}
        renderRow={this.renderRow}
      />
    )
  }
}

const mapStateToProps = state => ({
  employees: map(state.employees, (val, uid) => {
    return { ...val, uid }
  })
})

export default connect(
  mapStateToProps,
  { fetchEmployees }
)(EmployeeList)
