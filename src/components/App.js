import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import ContactCreate from '../components/contacts/ContactCreate';
import ContactList from '../components/contacts/ContactList';
import ContactShow from '../components/contacts/ContactShow';
import ContactEdit from '../components/contacts/ContactEdit';
import ContactDelete from '../components/contacts/ContactDelete';
import AppNavbar from '../components/Layout/AppNavbar';

const App = () => {
  return (
    <div className='container'>
      <BrowserRouter>
        <div>
          <AppNavbar />
          <Route path='/' exact component={ContactList} />
          <Route path='/contacts/new' exact component={ContactCreate} />
          <Route path='/contacts/edit' exact component={ContactEdit} />
          <Route path='/contacts/delete' exact component={ContactDelete} />
          <Route path='/contacts/show' exact component={ContactShow} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
