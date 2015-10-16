
var axios = require('axios')
var constants = require('../constants/ActionTypes')
var ADD_ITEM = constants.ADD_ITEM
var DELETE_ITEM = constants.DELETE_ITEM
var SET_ITEM = constants.SET_ITEM


export const load = () => {
  return dispatch => {
    axios.get(URL).then( response => {
      response.data.map( item => {
        dispatch(itemSet(item.id, item.data))
      })
    })
    }

}

var itemAdded = function(id, data) {
  return {
    type: ADD_ITEM,
    id, data
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




