import React from "react";
import PropTypes from "prop-types";
import ContactList from "../contacts/ContactList";

const Dashboard = (props) => {
  return (
    <div>
      <ContactList />
    </div>
  );
};

Dashboard.propTypes = {};

export default Dashboard;
