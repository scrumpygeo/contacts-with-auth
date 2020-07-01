import React from 'react';
import { Router, Route } from 'react-router-dom';
import ContactCreate from '../components/contacts/ContactCreate';
import ContactList from '../components/contacts/ContactList';
import ContactShow from '../components/contacts/ContactShow';
import ContactEdit from '../components/contacts/ContactEdit';
import ContactDelete from '../components/contacts/ContactDelete';
import AppNavbar from '../components/Layout/AppNavbar';
import history from '../history';

const App = () => {
  return (
    <div className='container'>
      <Router history={history}>
        <div>
          <AppNavbar />
          <Route path='/' exact component={ContactList} />
          <Route path='/contacts/new' exact component={ContactCreate} />
          <Route path='/contacts/edit/:id' exact component={ContactEdit} />
          <Route path='/contacts/delete/:id' exact component={ContactDelete} />
          <Route path='/contacts/show' exact component={ContactShow} />
        </div>
      </Router>
    </div>
  );
};

export default App;
