import React from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const Landing = ({ isAuthenticated }) => {
  // if authenticated prevent going to landing page
  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }
  return (
    <section className="landing">
      <div className="dark-overlay">
        <div className="landing-inner">
          <h1 className="x-large">Contacts</h1>
          <p className="lead">
            Contacts page to showcase basics of React Redux on Rails API
          </p>
          <div>
            <Link to="/register" className="btn btn-primary mr-2">
              Sign Up
            </Link>
            <Link to="/login" className="btn btn-light ml-2">
              Login
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

Landing.propType = {
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(Landing);
