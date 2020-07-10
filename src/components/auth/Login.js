import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Redirect, Link } from "react-router-dom";
import { login } from "../../actions/auth";
import PropTypes from "prop-types";

export class Login extends Component {
  state = {
    email: "",
    password: "",
  };

  onSubmit = (e) => {
    e.preventDefault();

    const body = { email: this.state.email, password: this.state.password };

    this.props.login(body);
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    // redirect if logged in
    if (this.props.isAuthenticated) {
      return <Redirect to="/dashboard" />;
    }

    return (
      <Fragment>
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-4 offset-sm-4">
              <div className="form-login"></div>

              <h1 className="large text-primary mt-3">Sign In</h1>
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

                <input
                  type="submit"
                  className="btn btn-primary"
                  value="Login"
                />
              </form>
              <p className="mt-2">
                Don't have an account? <Link to="/register">Sign Up</Link>
              </p>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login })(Login);
