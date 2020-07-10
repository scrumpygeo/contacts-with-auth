import React, { Component } from "react";
import { connect } from "react-redux";
import { Router, Route, Switch } from "react-router-dom";
import Landing from "../components/Layout/Landing";
import ContactCreate from "../components/contacts/ContactCreate";
import ContactList from "../components/contacts/ContactList";
import ContactShow from "../components/contacts/ContactShow";
import ContactEdit from "../components/contacts/ContactEdit";
import ContactDelete from "../components/contacts/ContactDelete";
import Register from "../components/auth/Register";
import Login from "../components/auth/Login";
import AppNavbar from "../components/Layout/AppNavbar";
import Alert from "../components/Layout/Alert";
import history from "../history";
import { loadUser } from "../actions/auth";
import setAuthToken from "../utils/setAuthToken";
import { setAlert } from "../actions/alert";
import PrivateRoute from "../components/routing/PrivateRoute";
import Dashboard from "../components/dashboard/Dashboard";

import "./app.css";

if (localStorage.authentication_token && localStorage.email) {
  setAuthToken(localStorage.authentication_token, localStorage.email);
}

class App extends Component {
  componentDidMount() {
    if (localStorage.authentication_token && localStorage.email) {
      this.props.loadUser();
    }
  }

  render() {
    return (
      <div className="container-fluid">
        <Router history={history}>
          <AppNavbar />
          <Alert />
          <Switch>
            <Route exact path="/" component={Landing} />
            <PrivateRoute exact path="/contactlist" component={ContactList} />
            <PrivateRoute
              exact
              path="/contacts/new"
              component={ContactCreate}
            />
            <PrivateRoute
              exact
              path="/contacts/edit/:id"
              component={ContactEdit}
            />
            <PrivateRoute
              path="/contacts/delete/:id"
              exact
              component={ContactDelete}
            />
            <PrivateRoute
              exact
              path="/contacts/show/:id"
              component={ContactShow}
            />
            <Route exact path="/register" component={Register} />
            <Route path="/login" exact component={Login} />
            <PrivateRoute exact path="/dashboard" component={Dashboard} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default connect(null, { loadUser, setAlert, setAuthToken })(App);
