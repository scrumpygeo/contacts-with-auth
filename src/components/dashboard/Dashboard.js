import React, { Component } from "react";
import { ContactList } from "../contacts/ContactList";

export class Dashboard extends Component {
  render() {
    return (
      <div>
        <ContactList />
      </div>
    );
  }
}

export default Dashboard;
