import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { register } from "../../actions/auth";
import { setAlert } from "../../actions/alert";
import PropTypes from "prop-types";

export class Register extends Component {
  state = {
    email: "",
    password: "",
    password2: "",
  };

  onSubmit = async (e) => {
    e.preventDefault();

    const errArray = [];
    if (this.state.password !== this.state.password2) {
      errArray.push(this.props.setAlert("Passwords do not match", "danger"));
    } else {
      const registerValues = {
        user: {
          email: this.state.email,
          password: this.state.password,
          password2: this.state.password2,
        },
      };

      this.props.register(registerValues);
    }
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    // redirect if authenticated
    if (this.props.isAuthenticated) {
      return <Redirect to="/dashboard" />;
    }

    return (
      <Fragment>
        <h1 className="large text-primary">Sign Up</h1>
        <p className="lead">
          <i className="fas fa-user"></i> Create Your Account
        </p>
        <form className="form" onSubmit={(e) => this.onSubmit(e)}>
          <div className="form-group">
            <input
              type="email"
              placeholder="Email Address"
              name="email"
              className="form-control"
              value={this.state.email}
              onChange={(e) => this.handleChange(e)}
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
              onChange={(e) => this.handleChange(e)}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="Confirm Password"
              name="password2"
              minLength="6"
              className="form-control"
              value={this.state.password2}
              onChange={(e) => this.handleChange(e)}
              required
            />
          </div>
          <input type="submit" className="btn btn-primary" value="Register" />
        </form>

        <p className="mt-2">
          Already have an account? <Link to="/login">Sign In</Link>
        </p>
      </Fragment>
    );
  }
}
Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { register, setAlert })(Register);
