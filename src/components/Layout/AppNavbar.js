import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../actions/auth";

const AppNavbar = ({ auth: { isAuthenticated, loading, email }, logout }) => {
  console.log("isauthenticated", isAuthenticated);
  console.log("Loading:", loading);
  const authLinks = (
    <Fragment>
      <li className="nav-item active">
        <p className="mr-4">{email}</p>
      </li>
      <li className="nav-item active">
        <a onClick={logout} href="/">
          <i className="fas fa-sign-out-alt"></i> Logout
        </a>
      </li>
    </Fragment>
  );

  const guestLinks = (
    <Fragment>
      <li className="nav-item active">
        <Link
          to="/register"
          className="nav-item nav-link text-primary"
          href="#!"
        >
          Register
        </Link>
      </li>
      <li className="nav-item active">
        <Link to="/login" className="nav-item nav-link text-primary" href="#">
          Login
        </Link>
      </li>
    </Fragment>
  );

  return (
    <Fragment>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link to="/" className="navbar-brand">
          Contacts
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse " id="navbarTogglerDemo02">
          <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
            {!loading && (
              <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
            )}
          </ul>
        </div>
      </nav>
    </Fragment>
  );
};

AppNavbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(AppNavbar);
