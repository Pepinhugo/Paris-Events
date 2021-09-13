import React, {useState, useEffect} from 'react';

const Cards = () => {

  const [records, setRecords] = useState(null);
  

  useEffect(() => {
   fetch("https://opendata.paris.fr/api/v2/catalog/datasets/que-faire-a-paris-/records?order_by=updated_at%20desc&limit=1&pretty=false&timezone=UTC") 
    .then(response => response.json())
    .then(recordsData => {
     
      console.log(recordsData.records);
      setRecords(recordsData.records)

    })
  },[])

  return (

    <div className='contentCards'>
            <h2>Actualité</h2>
              <p>Le dernier événement publié :</p>

                  {records && records.map((recordEvents) => 

                    <div className='card' key={recordEvents.record.id}>

                        <a href="Events.jsx"><img src= {recordEvents.record.fields.cover_url}/></a>
                        <h3>{recordEvents.record.fields.title}</h3>
                        <p>{recordEvents.record.fields.date_start}</p>
                        <p>{recordEvents.record.fields.date_end}</p>
                        <p>{recordEvents.record.fields.lead_text}</p>

                        <button className='btn'>❤</button>

                    </div>
                  
                  )}
            
    </div>
  );
  };
  
  export default Cards;