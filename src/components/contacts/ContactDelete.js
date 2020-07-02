import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchContact, deleteContact } from "../../actions";
import Modal from "../Modal";
import history from "../../history";
import "../modal.css";

class ContactDelete extends Component {
  componentDidMount() {
    this.props.fetchContact(this.props.match.params.id);
  }

  renderActions() {
    const { id } = this.props.match.params;

    return (
      <>
        <button
          onClick={() => this.props.deleteContact(id)}
          type="button"
          className="btn btn-danger"
        >
          Delete
        </button>
        <Link
          type="button"
          to="/"
          className="btn btn-secondary"
          data-dismiss="modal"
        >
          Cancel
        </Link>
      </>
    );
  }

  renderContent() {
    // if not data not loaded yet it runs the 1st line, then 2nd after it data loaded
    if (!this.props.contact) {
      return "Are you sure you want to delete this contact?";
    }
    return `Are you sure you want to delete contact for ${this.props.contact.first_name} ${this.props.contact.last_name}?`;
  }

  render() {
    return (
      <div className="modal-backdrop" onClick={() => history.push("/")}>
        <Modal
          title={"Delete Contact"}
          content={this.renderContent()}
          actions={this.renderActions()}
          onDismiss={() => history.push("/")}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    contact: state.contacts[ownProps.match.params.id],
  };
};

export default connect(mapStateToProps, { fetchContact, deleteContact })(
  ContactDelete
);
