import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchContact, editContact } from '../../actions';
import ContactForm from './ContactForm';

class ContactEdit extends Component {
  componentDidMount() {
    this.props.fetchContact(this.props.match.params.id);
  }

  onSubmit = (formValues) => {
    this.props.editContact(this.props.match.params.id, formValues);
  };

  render() {
    if (!this.props.contact) {
      return <div>Loading...</div>;
    }
    return (
      <div>
        <h3 className='text-center mt-2'>Edit a Contact</h3>
        <ContactForm
          initialValues={{
            first_name: this.props.contact.first_name,
            last_name: this.props.contact.last_name,
            email: this.props.contact.email,
          }}
          onSubmit={this.onSubmit}
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

export default connect(mapStateToProps, { fetchContact, editContact })(
  ContactEdit
);
