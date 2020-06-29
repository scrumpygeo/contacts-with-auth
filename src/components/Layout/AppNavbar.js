import React from 'react';
import { Link } from 'react-router-dom';

const AppNavbar = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light'>
      <Link to='/' className='navbar-brand'>
        Contacts
      </Link>

      <div
        className='collapse navbar-collapse ml-auto justify-content-end '
        id='navbarNavAltMarkup'
      >
        <div className='navbar-nav '>
          <Link to='/' className='nav-item nav-link' href='#'>
            TBD <span className='sr-only'>(current)</span>
          </Link>
          <Link to='/' className='nav-item nav-link' href='#'>
            TBD
          </Link>
          <Link to='/' className='nav-item nav-link' href='#'>
            TBD
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default AppNavbar;
