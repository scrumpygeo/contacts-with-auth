import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchContacts } from '../../actions';

export class ContactList extends Component {
  componentDidMount() {
    this.props.fetchContacts();
  }

  renderAdmin = (contact) => {
    return (
      <div className='float-right'>
        <button className='btn btn-primary mr-2'>Edit</button>
        <button className='btn btn-danger'>Delete</button>
      </div>
    );
  };

  renderList() {
    return this.props.contacts.map((contact) => {
      return (
        // return jsx
        <div className='col-sm-6' key={contact.id}>
          <div className='card my-3' style={{ backgroundColor: '#e6f9ff' }}>
            <div className='card-body'>
              <h5 className='card-title'>
                {contact.first_name} {contact.last_name}
              </h5>
              <div>
                <p className='card-text float-left mt-2'>{contact.email}</p>
                {this.renderAdmin(contact)}
              </div>
            </div>
          </div>
        </div>
      );
    });
  }

  render() {
    return <div className='row'>{this.renderList()}</div>;
  }
}

const mapStateToProps = (state) => {
  return { contacts: Object.values(state.contacts) };
};

export default connect(mapStateToProps, { fetchContacts })(ContactList);
