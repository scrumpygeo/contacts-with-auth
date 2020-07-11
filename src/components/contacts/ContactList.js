import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchContacts } from "../../actions/contacts";

export class ContactList extends Component {
  componentDidMount() {
    this.props.fetchContacts();
  }

  renderAdmin = (contact) => {
    return (
      <div className="float-right">
        <Link
          to={`/contacts/edit/${contact.id}`}
          className="btn btn-primary mr-2"
        >
          Edit
        </Link>
        <Link to={`/contacts/delete/${contact.id}`} className="btn btn-danger">
          Delete
        </Link>
      </div>
    );
  };

  renderList() {
    // if (Object.keys(this.props.contacts).length === 0) {
    //   return (
    //     <div className="mx-auto">
    //       <h2>You nave no contacts yet.</h2>
    //     </div>
    //   );
    // }
    return this.props.contacts.map((contact) => {
      return (
        // return jsx
        <div className="col-sm-6" key={contact.id}>
          <div className="card my-3" style={{ backgroundColor: "#e6f9ff" }}>
            <div className="card-body">
              <h5 className="card-title">
                <Link to={`/contacts/show/${contact.id}`}>
                  {contact.first_name} {contact.last_name}
                </Link>
              </h5>
              <div>
                <p className="card-text float-left mt-2">{contact.email}</p>
                {this.renderAdmin(contact)}
              </div>
            </div>
          </div>
        </div>
      );
    });
  }

  renderCreateBtn() {
    return (
      <div style={{ textAlign: "right" }}>
        <Link to="/contacts/new" className="btn btn-success mt-1">
          Add a Contact
        </Link>
      </div>
    );
  }

  render() {
    return (
      <Fragment>
        <div className="my-2">
          <h2 className="d-inline ml-4">Contacts</h2>{" "}
          <span className="float-right mr-4 "> {this.renderCreateBtn()}</span>
        </div>
        <div className="row">{this.renderList()}</div>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  contacts: Object.values(state.contacts),
});

export default connect(mapStateToProps, { fetchContacts })(ContactList);
