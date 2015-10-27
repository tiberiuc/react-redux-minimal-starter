import {createStore, applyMiddleware, combineReducers, compose} from 'redux'
import thunkMiddleware from 'redux-thunk'
import simple from './simple-store'
import immutable from './immutable-store'
import { reduxReactRouter, routerStateReducer, ReduxRouter } from 'redux-router'
import createHistory from 'history/lib/createBrowserHistory'
import routes from '../routes/index.js'

const rootReducer = combineReducers({
  simple, immutable,
  router: routerStateReducer
})

const createStoreWithMiddleware = compose(
    applyMiddleware(thunkMiddleware),
    reduxReactRouter({
      routes,
      createHistory
    })
)(createStore);


export default function configureStore(initialState) {
  const store = createStoreWithMiddleware(rootReducer, initialState)

  return store
}

