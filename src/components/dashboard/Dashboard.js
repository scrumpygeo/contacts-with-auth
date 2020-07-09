import React, { Fragment } from "react";
import { connect } from "react-redux";
import Spinner from "../Layout/Spinner";
import PropTypes from "prop-types";

import ContactList from "../contacts/ContactList";

const Dashboard = ({ loading }) => {
  return loading ? (
    <Spinner />
  ) : (
    <Fragment>
      <ContactList />
    </Fragment>
  );
  // return (
  //   <div>
  //     <ContactList />
  //   </div>
  // );
};

Dashboard.prototypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(Dashboard);
