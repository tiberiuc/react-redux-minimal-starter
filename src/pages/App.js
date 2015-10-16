import React from 'react'
import {connect} from 'react-redux'
import {Router, Route, Link} from 'react-router'
import { Provider } from 'react-redux';
import invariant    from 'invariant';

import {load} from '../actions/AppActions'

import routes from '../routes'

class App extends React.Component {

  componentWillMount() {
    const {dispatch} = this.props
    //example to load data
    //dispatch(load())
  }


  renderRouter () {
    invariant(
      this.props.routingContext || this.props.routerHistory,
      '<Root /> needs either a routingContext or routerHistory to render.'
    );

    if (this.props.routingContext) {
      return <RoutingContext {...this.props.routingContext} />;
    } else {
      return (
        <Router history={this.props.routerHistory}>
          {routes}
        </Router>
      );
    }
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


export default connect(mapStateToProps, mapDispatchToProps)(App)
