//Import des fonctionnalités de react
import React from 'react';
//Import des liens de navigation pour passer d'une page à l'autre
import { Link } from 'react-router-dom';

//La Navbar (barre de menu)
const Navbar = () => {

  return (

    <nav className=''>

      <div className=''>

        <Link to='/' className='links'>Accueil</Link>
        <Link to='/SearchEvents' className='links'>Rechercher un Evenement</Link>
        <Link to='/Favoris'className='links'>Favoris</Link>

      </div>

    </nav>

  );
};
  
export default Navbar;
