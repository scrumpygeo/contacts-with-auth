import React from "react";
import { Link } from "react-router-dom";

const Landing = () => {
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

export default Landing;
