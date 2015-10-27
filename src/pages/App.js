import React from 'react'
import {connect} from 'react-redux'
import {Router, Route, Link} from 'react-router'
import { Provider } from 'react-redux'
import invariant    from 'invariant'
import {ReduxRouter} from 'redux-router'

import {load} from '../actions/AppActions'

import routes from '../routes'

class App extends React.Component {

  componentWillMount() {
    const {dispatch} = this.props
    //example to load data
    //dispatch(load())
  }


  renderRouter () {
    return (
      <ReduxRouter>
        {routes}
      </ReduxRouter>
    );
  }

  render () {

    return (
      <div>
        <Provider store={this.props.store}>
          {this.renderRouter()}
        </Provider>
      </div>
    );
  }

}

export default App
