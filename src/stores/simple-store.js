var constants = require('../constants/ActionTypes')
var ADD_ITEM = constants.ADD_ITEM
var DELETE_ITEM = constants.DELETE_ITEM
var SET_ITEM = constants.SET_ITEM

var initialState = [];

var reducer = function (state, action) {
  if(!state) {
    state = initialState;
  }
  var id = action.id;
  var data = action.data;

  switch(action.type){

    case ADD_ITEM:
      var newData = []
      state.forEach(function(item){
        newData.push(item)
      })
      newData.push({id:id, data:data})
      return newData

    case SET_ITEM:
      return state.map(function(item) {
        return item.id === id ?
          Object.assign({}, item, {data:data}) :
          item
        })

    case DELETE_ITEM:
      return state.filter( function(item) { return item.id !== id})

    default:
      return state
  }
}

module.exports = reducer;

