import React from 'react'
import {connect} from 'react-redux'

import SmartComponent from '../components/SmartComponent'
import DumbComponent from '../components/DumbComponent'

class Home extends React.Component {


  componentWillMount() {
    const {dispatch} = this.props
  }
  render() {
    const {state, dispatch} = this.props
    return (
      <div>
        <SmartComponent />
        <DumbComponent />
      </div>
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
