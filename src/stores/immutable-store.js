import {ADD_ITEM, SET_ITEM, DELETE_ITEM} from '../constants/ActionTypes'
import {Map,List} from 'immutable'

const initialState = Map({})


export default (state = initialState, action) => {
  const {id, data} = action
  const itemPath = [id]

  switch (action.type) {

    case SET_ITEM:
      return data === null
             ? state.deleteIn(itemPath)
             : state.setIn(itemPath, Map(data))

    default:
      return state
  }
}
