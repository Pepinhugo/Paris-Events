//Import des fonctionnalités de react
import React, {useState, useEffect} from 'react';

//Fonction pour récupérer les données recherchées sur la page SearchEvents avec l'utilisation d'un fetch 
const SearchEvents = () => {

  const [records, setRecords] = useState(null);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
   fetch(`https://opendata.paris.fr/api/v2/catalog/datasets/que-faire-a-paris-/records?search=${searchText}`) 
    .then(response => response.json())
    .then(recordsData => {
    
      setRecords(recordsData.records)
     
    })
  },[])

  //Fonction pour enregistrer et stocker la valeur recherchée dans la zone textuelle (input)
  const searchInput = (event) =>{
    setSearchText(event.target.value);
  }
  
  //Fonction pour envoyer le résultat de la valeur recherchée
  const searchSubmit = (event) =>{
    console.log(searchText)
    //stopper l'événement
    event.preventDefault();
  } 

    //Les Données recupérées et retournées par la fonction  
    return (
      <div className=''>
      

        <h1>Rechercher un Evénement à Paris</h1>

            <label for="Rechercher un Evénement à Paris">Rechercher un Evénement à Paris :</label>

            <form onSubmit={searchSubmit}>
              <input onInput={searchInput} type="search" aria-label="Rechercher un Evénement"></input>
                  <button>Rechercher</button>
            </form>

          <h2>Résultats de la recherche</h2>  

        {records && records.map((recordEvents) => 

          <div className='card' key={recordEvents.record.id}>

            <a href="Events.jsx"><img src= {recordEvents.record.fields.cover_url}/></a>
            <h3>{recordEvents.record.fields.title}</h3>
            <p>{recordEvents.record.fields.date_start}</p>
            <p>{recordEvents.record.fields.date_end}</p>
            <p>{recordEvents.record.fields.lead_text}</p>

          </div>

        )}

      </div>
    );
};

export default SearchEvents;