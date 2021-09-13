import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
      <nav className=''>
        <div className=''>
          <Link to='/' className='links'>
            Accueil
          </Link>
          <Link to='/SearchEvents' className='links'>
            Rechercher un Evenement
          </Link>
          <Link
            to='/Favoris'
            className='links'
          >Favoris
          </Link>
        </div>
      </nav>
    );
  };
  
  export default Navbar;
