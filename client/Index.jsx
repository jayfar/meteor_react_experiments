itemsCountTest = new ReactiveVar(0);


Index = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData() {
    return {
      countTest: itemsCountTest.get()
    };
  },
  componentWillMount() {
    // Update the page's title
    document.title = "Meteor And React Demo";
  },
  handleThatEvent: function(e){
       //update state, etc.
       // alert("test");
       itemsCountTest.set(itemsCountTest.get()+1);
  },
  render() {
    return (
      <div className="row">
        <div className="col-xs-12">
          <p>This is the index route.</p>
          <input type="button" onClick={this.handleThatEvent} value="Click Me!" />
          <p>You''ve pressed the button {this.data.countTest} times.</p>
        </div>
      </div>
    );
  }
});