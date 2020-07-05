import React, { Component } from "react";
import { connect } from "react-redux";
import { Router, Route, Switch } from "react-router-dom";
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

if (localStorage.authentication_token && localStorage.email) {
  setAuthToken(localStorage.authentication_token, localStorage.email);
}

class App extends Component {
  componentDidMount() {
    this.props.loadUser();
  }

  render() {
    return (
      <div className="container">
        <Router history={history}>
          <div>
            <AppNavbar />
            <Alert />
            <Switch>
              <Route path="/" exact component={ContactList} />
              <Route path="/contacts/new" exact component={ContactCreate} />
              <Route path="/contacts/edit/:id" exact component={ContactEdit} />
              <Route
                path="/contacts/delete/:id"
                exact
                component={ContactDelete}
              />
              <Route path="/contacts/show/:id" exact component={ContactShow} />
              <Route path="/register" exact component={Register} />
              <Route path="/login" exact component={Login} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default connect(null, { loadUser, setAlert, setAuthToken })(App);
