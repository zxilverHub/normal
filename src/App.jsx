import React, { useEffect, useState } from 'react'

function App() {
  const [data, setData] = useState(null)

  useEffect(()=>{
    async function fetchData(){
      try {
        const res = await fetch(`https://restcountries.com/v3.1/all`)
        const datas = await res.json();
        setData(datas)

      } catch (error) {
        console.log(error)
      }
    }

    fetchData();
  }, [])
  

  return (
    <div>
      { data.map((d, i)=>(
        <p key={i}>{d?.name?.common}</p>
      )) }
    </div>
  )
}

export default App