const Hello = BlazeToReact('hello');

// Example from:
//https://atmospherejs.com/thereactivestack/blazetoreact
// But it does not seem to update the Blaze GUI. I see the react self.state.count changing, but not the gui?

BlazeReact = React.createClass({
  getInitialState() {
    return {
      count: 10
    };
  },

  componentDidMount() {
    var self = this;

    this.interval = setInterval(function() {
      console.log("test " + self.state.count);
      self.setState({ count: self.state.count + 1 });
    }, 1000);
  },

  componentWillUnmount() {
    clearInterval(this.interval);
  },

  render() {
    return <Hello message="hi from react" count={this.state.count} />;
  }
})