
import { ADD_ITEM, DELETE_ITEM, SET_ITEM} from '../constants/ActionTypes'
import axios from 'axios'


export const load = () => {
  return dispatch => {
    axios.get(URL).then( response => {
      response.data.map( item => {
        dispatch(itemSet(item.id, item.data))
      })
    })
    }

}

export const itemAdded = (id, data) => ({
  type: ADD_ITEM,
  id, data
})

export const itemDeleted = (id) => ({
  type: DELETE_ITEM,
  id
})

export const itemSet = (id, data) => ({
  type: SET_ITEM,
  id, data
})




