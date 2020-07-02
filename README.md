# Readme

Simple and basic CRUD setup with React Redux for API.

This version omits any login/security and uses:

redux
react-redux
redux-thunk
react-router-dom
redux-form
axios
lodash

In this version, contacts will be stored in store as a collection of key-value pairs instead of as an array of objects, simplifying access for some actions. For other actions, specifically FETCH_CONTACTS and DELETE_CONTACT, lodash is used to simplify the process.

A portal is used to show the modal delete confirmation screen when a contact is deleted.
