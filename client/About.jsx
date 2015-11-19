
About = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData() {
    return {
    };
  },
  componentWillMount() {
    // Update the page's title
    document.title = "About Meteor And React Demo";
  },
  handleThatEvent: function(e){
       //update state, etc.
       // alert("test");
       //itemsCountTest.set(itemsCountTest.get()+1);
  },
  render() {
    return (
      <div className="row">
        <div className="col-xs-12">
          <p>This is the aboud page.</p>
          <p>You passed in {this.props.params.id} as the id.</p>
        </div>
      </div>
    );
  }
});