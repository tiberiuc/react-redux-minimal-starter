var React=require('react');
var connect=require('react-redux').connect;


var SmartComponentES5 = React.createClass({
  componentWillMount: function(){
    var dispatch = this.props.dispatch
  },

  render: function(){
    var simpleStore = this.props.simpleStore;
    var immutableStore = this.props.immutableStore;
    var dispatch = this.props.dispatch;

    console.log(simpleStore, immutableStore)
    return (
      <h1>Home page component</h1>
    );
  }

})



function mapStateToProps(state){
  return {
    simpleStore: state.simple,
    immutableStore: state.immutable
  }
}


module.exports = connect(mapStateToProps)(SmartComponentES5)

