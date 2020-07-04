import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { register } from "../../actions/auth";
import { setAlert } from "../../actions/alert";

export class Register extends Component {
  state = {
    email: "",
    password: "",
    password2: "",
    registrationErrors: "",
  };

  onSubmit = async (e) => {
    e.preventDefault();
    if (this.state.password !== this.state.password2) {
      this.props.setAlert("Passwords do not match", "danger");
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
        <p className="my-1">
          Already have an account? <a href="login.html">Sign In</a>
        </p>
      </Fragment>
    );
  }
}

export default connect(null, { register, setAlert })(Register);
