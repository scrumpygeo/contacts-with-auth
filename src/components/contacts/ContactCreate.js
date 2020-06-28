import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class ContactCreate extends Component {
  renderError({ error, touched }) {
    if (touched && error) {
      return <div className='alert alert-danger'>{error}</div>;
    }
  }
  renderInput = ({ input, label, meta }) => {
    return (
      <div className='form-group'>
        <label>{label}</label>
        <input {...input} className='form-control' autoComplete='off' />
        {this.renderError(meta)}
        {/* <div className='alert alert-danger'>{meta.error}</div> */}
      </div>
    );
  };

  onSubmit(formValues) {
    console.log(formValues);
  }
  render() {
    return (
      <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
        <Field
          name='first_name'
          component={this.renderInput}
          label='First Name'
        />
        <Field
          name='last_name'
          component={this.renderInput}
          label='Last Name'
        />
        <Field name='email' component={this.renderInput} label='Email' />
        <button className='btn btn-primary'>Submit</button>
      </form>
    );
  }
}

const validate = (formValues) => {
  const errors = {};

  if (!formValues.first_name) {
    errors.first_name = 'You must enter a first name.';
  }

  if (!formValues.last_name) {
    errors.last_name = 'You must enter a last name.';
  }

  if (!formValues.email) {
    errors.email = 'You must enter an email.';
  }

  return errors;
};

export default reduxForm({
  form: 'contactCreate',
  validate,
})(ContactCreate);
