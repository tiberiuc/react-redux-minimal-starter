import React from 'react'
import {connect} from 'react-redux'


class SmartComponent extends React.Component {


  componentWillMount() {
    const {dispatch} = this.props
  }
  render() {
    const {simpleStore, immutableStore, dispatch} = this.props
    console.log(simpleStore, immutableStore)
    return (
      <h1>Home page component</h1>
    )
  }

}

function mapStateToProps(state){
  return {
    simpleStore: state.simple,
    immutableStore: state.immutable
  }
}


export default connect(mapStateToProps)(SmartComponent)
