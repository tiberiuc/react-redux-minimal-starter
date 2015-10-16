
var axios = require('axios')
var constants = require('../constants/ActionTypes')
var ADD_ITEM = constants.ADD_ITEM
var DELETE_ITEM = constants.DELETE_ITEM
var SET_ITEM = constants.SET_ITEM


var load = function () {
  return function(dispatch) {
    axios.get(URL).then( function(response) {
      response.data.map( function(item) {
        dispatch(itemSet(item.id, item.data))
      })
    })
    }

}

var itemAdded = function(id, data) {
  return {
    type: ADD_ITEM,
    id: id,
    data: data
  }
}

var itemDeleted = function(id) {
  return {
    type: DELETE_ITEM,
    id: id
  }
}
var itemSet = function(id, data) {
  return {
    type: SET_ITEM,
    id: id,
    data: data
  }
}

module.exports = {
  load: load,
  itemAded: itemAdded,
  itemDeleted: itemDeleted,
  itemSet: itemSet
}
