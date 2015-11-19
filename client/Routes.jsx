const {
  Router,
  Route,
  IndexRoute,
  history
} = ReactRouter;

const browserHistory = history.createHistory();

Routes = React.createClass({
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={Index}/>
          <Route path="about/:id" component={About} />
        </Route>
      </Router>
    );
  }
});