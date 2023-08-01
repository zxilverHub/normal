import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('https://restcountries.com/v3.1/all');
        setData(response.data);
      } catch (error) {
        console.log('Error fetching data:', error);
      }
    }

    fetchData();
  }, []);

  if(!data) {
    return (
      <p>No data</p>
    )
  }

  return (
    <div>
      {data.map((country, i) => (
        <p key={i}>{country?.name?.common}</p>
      ))}
    </div>
  );
}

export default App;
