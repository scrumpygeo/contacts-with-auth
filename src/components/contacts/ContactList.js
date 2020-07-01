import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchContacts } from '../../actions';

export class ContactList extends Component {
  componentDidMount() {
    this.props.fetchContacts();
  }

  renderAdmin = (contact) => {
    return (
      <div className='float-right'>
        <Link
          to={`/contacts/edit/${contact.id}`}
          className='btn btn-primary mr-2'
        >
          Edit
        </Link>
        <Link to={`/contacts/delete/${contact.id}`} className='btn btn-danger'>
          Delete
        </Link>
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

  renderCreateBtn() {
    return (
      <div style={{ textAlign: 'right' }}>
        <Link to='/contacts/new' className='btn btn-success mt-1'>
          Add a Contact
        </Link>
      </div>
    );
  }

  render() {
    return (
      <Fragment>
        <div className='my-2'>
          <h2 className='d-inline'>Contacts</h2>{' '}
          <span className='float-right '> {this.renderCreateBtn()}</span>
        </div>
        <div className='row'>{this.renderList()}</div>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return { contacts: Object.values(state.contacts) };
};

export default connect(mapStateToProps, { fetchContacts })(ContactList);
