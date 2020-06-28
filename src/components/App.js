import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import ContactCreate from '../components/contacts/ContactCreate';
import ContactList from '../components/contacts/ContactList';
import ContactShow from '../components/contacts/ContactShow';
import ContactEdit from '../components/contacts/ContactEdit';
import ContactDelete from '../components/contacts/ContactDelete';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
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
