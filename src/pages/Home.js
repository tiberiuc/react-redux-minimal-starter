import React from 'react'
import {connect} from 'react-redux'

import {load} from '../actions/AppActions'

class Home extends React.Component {


  componentWillMount() {
    const {dispatch} = this.props
    dispatch(load())
  }
  render() {
    const {state, dispatch} = this.props
    return (
      <h1>Home page</h1>
    )
  }

}

function mapStateToProps(state){
  return {
    state
  }
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Home)
