import React from "react";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import { connect } from "react-redux";
import Bulma from "bulma";
import Login from "./Login";
import Register from "./Register";
import Nav from "./Nav";
import Meeting from "./Meeting";
import History from "./History";
import Form from "./Form";
import { checkAuth } from "../actions/auth";
import Graph from "./Graph";

export class App extends React.Component {
  componentDidMount() {
    const confirmSuccess = () => {};
    this.props.dispatch(checkAuth(confirmSuccess));
  }

  render() {
    const { auth } = this.props;
    return (
      <Router>
        <div className="container has-text-centered">
          <div className="hero is-small is-primary">
            <div className="hero-body has-text-centered">
              <Link to="/" className="">
                <h1 className="title is-1">$how Me The Money</h1>
              </Link>
              <Route path="/" component={Nav} />
            </div>
          </div>

          <div className="bodyContent">
            {auth.isAuthenticated ? (
              <Route exact path="/" component={History} />
            ) : (
              <Route exact path="/" component={Login} />
            )}

            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/meeting/:id" component={Meeting} />
            <Route path="/history" component={History} />
            <Route path="/form" component={Form} />
            <Route path="/graph">
              <>
                <h1 className="title is-2">Company Wide Cost Analysis Graph</h1>
                <Graph limit={false} />
              </>
            </Route>
          </div>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  return {
    auth,
  };
};

export default connect(mapStateToProps)(App);
