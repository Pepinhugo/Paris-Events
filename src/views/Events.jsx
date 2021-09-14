// Import des fonctionnalités de react et du component Cards
import React, {useState, useEffect} from 'react';
import Cards from '../components/Cards';

//Fonction pour récupérer les données détaillées sur la page Events avec l'utilisation d'un fetch 
const Events = () => {

  const [records, setRecords] = useState(null);

  useEffect(() => {
    fetch("https://opendata.paris.fr/api/v2/catalog/datasets/que-faire-a-paris-/records/1ea9c9dbfdcc44df66c941a81a989c88688d2c4e%20?pretty=false&timezone=UTC") 
     .then(response => response.json())
     .then(recordsData => {
     
       setRecords(recordsData.records)
      
     })
   },[])

   //Les Données recupérées et retournées par la fonction
    return (

      <div className=''>

        <h1>La page des Evénements détaillés</h1>

        <Cards/>

          {records && records.map((recordEvents) => 

            <div className='card' key={recordEvents.record.id}>

              <img src= {recordEvents.record.fields.cover_url}/>
              <h3>{recordEvents.record.fields.title}</h3>
              <p>{recordEvents.record.fields.date_start}</p>
              <p>{recordEvents.record.fields.date_end}</p>
              <p>{recordEvents.record.fields.description}</p>
              <p>{recordEvents.record.fields.price_detail}</p>
              <p>{recordEvents.record.fields.address_street}</p>
              <p>{recordEvents.record.fields.address_zipcode}</p>
              <p>{recordEvents.record.fields.address_city}</p>
              <p>{recordEvents.record.fields.transport}</p>
              <p>{recordEvents.record.fields.contact_phone}</p>
              <p>{recordEvents.record.fields.contact_facebook}</p>

            </div>
          )}  
      </div>
    );
};
  
  export default Events;