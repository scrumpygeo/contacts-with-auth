import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchContact } from "../../actions/contacts";

class ContactShow extends Component {
  componentDidMount() {
    this.props.fetchContact(this.props.match.params.id);
  }
  render() {
    if (!this.props.contact) {
      return <div>Loading...</div>;
    }

    const { first_name, last_name, email } = this.props.contact;

    return (
      <div className="jumbotron jumbotron-fluid mt-4">
        <div className="container">
          <h1 className="display-4  text-center pb-2 text-success">
            {first_name} {last_name}
          </h1>
          <p className="lead text-center mt-4 ">
            <strong>{email}</strong>
          </p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    contact: state.contacts[ownProps.match.params.id],
  };
};

export default connect(mapStateToProps, { fetchContact })(ContactShow);
