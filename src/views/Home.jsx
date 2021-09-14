//Import des fonctionalités de react et du component Cards
import React from 'react';
import Cards from '../components/Cards';

//Trame de la page d'accueil de l'application et affichage du component Cards
const Home = () => {

  return (

    <div className="App">

      <div className='contentHome'>

        <h1>Bienvenue sur Paris Events</h1>
          <p>L'application qui permet de rechercher en direct les prochains événements Parisiens</p>

      </div> 
      
      <Cards/> 

    </div>
  );

};

export default Home;