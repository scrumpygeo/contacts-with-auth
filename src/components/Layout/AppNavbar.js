import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../actions/auth";

const AppNavbar = ({ auth: { isAuthenticated, loading }, logout }) => {
  const authLinks = (
    <div className="navbar-nav ">
      <a onClick={logout} href="#!">
        <i className="fas fa-sign-out-alt"></i> Logout
      </a>
    </div>
  );

  const guestLinks = (
    <div className="navbar-nav ">
      <Link to="/register" className="nav-item nav-link" href="#">
        Register
      </Link>
      <Link to="/login" className="nav-item nav-link" href="#">
        Login
      </Link>
    </div>
  );

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link to="/" className="navbar-brand">
        Contacts
      </Link>

      <div
        className="collapse navbar-collapse ml-auto justify-content-end "
        id="navbarNavAltMarkup"
      >
        {!loading && (
          <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
        )}
      </div>
    </nav>
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
