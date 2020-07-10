# Readme

Simple and basic CRUD setup with React Redux for Ruby on Rails API using simple_token_authentication and devise for authentication.

React side uses:

redux
react-redux
redux-thunk
react-router-dom
redux-form
axios
lodash

Bootstrap 4 for styling.

In this version, contacts will be stored in store as a collection of key-value pairs instead of as an array of objects, simplifying access for some actions. For other actions, specifically FETCH_CONTACTS and DELETE_CONTACT, lodash is used to simplify the process.

A portal is used to show the modal delete confirmation screen when a contact is deleted.
