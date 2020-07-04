import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { loginUser } from "../../actions/auth";

export class Login extends Component {
  state = {
    email: "",
    password: "",
    loginErrors: "",
  };

  headers = {
    "Content-Type": "application/json",
  };

  onSubmit = (e) => {
    e.preventDefault();
    const headers = {
      "Content-Type": "application/json",
    };

    const body = { email: this.state.email, password: this.state.password };
    this.props.loginUser(body, headers);
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    return (
      <Fragment>
        <h1 className="large text-primary">Sign In</h1>
        <p className="lead">
          <i className="fas fa-user"></i> Log Into Your Account
        </p>
        <form
          className="form"
          action="create-profile.html"
          onSubmit={this.onSubmit}
        >
          <div className="form-group">
            <input
              type="email"
              placeholder="Email Address"
              name="email"
              className="form-control"
              value={this.state.email}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="Password"
              name="password"
              minLength="6"
              className="form-control"
              value={this.state.password}
              onChange={this.handleChange}
              required
            />
          </div>

          <input type="submit" className="btn btn-primary" value="Login" />
        </form>
      </Fragment>
    );
  }
}

export default connect(null, { loginUser })(Login);
