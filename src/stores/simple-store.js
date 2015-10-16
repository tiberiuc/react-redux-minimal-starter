
import {ADD_ITEM, SET_ITEM, DELETE_ITEM} from '../constants/ActionTypes'

const initialState = []

export default (state=initialState, action) => {
  const {id, data} = action
  switch(action.type){

    case ADD_ITEM:
      return [...state, {id, data}]

    case SET_ITEM:
      return state.map(item =>
        item.id === id ?
          Object.assign({}, item, {data}) :
          item
        )

    case DELETE_ITEM:
      return state.filter( item => item.id !== id)

    default:
      return state
  }
}

