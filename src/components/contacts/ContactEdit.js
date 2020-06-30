import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchContact } from '../../actions';

class ContactEdit extends Component {
  componentDidMount() {
    this.props.fetchContact(this.props.match.params.id);
  }
  render() {
    if (!this.props.contact) {
      return <div>Loading...</div>;
    }
    return <div>{this.props.contact.email}</div>;
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    contact: state.contacts[ownProps.match.params.id],
  };
};

export default connect(mapStateToProps, { fetchContact })(ContactEdit);
