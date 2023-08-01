import React, { useEffect, useState } from 'react'

function App() {
  const [data, setData] = useState(null)

  // useEffect(()=>{
  //   async function fetchData(){
  //     try {
  //       const res = await fetch(`https://restcountries.com/v3.1/all`)
  //       const datas = await res.json();
  //       setData(datas)

  //     } catch (error) {
  //       console.log(error)
  //     }
  //   }

  //   fetchData();
  // }, [])

  // if(!data) {
  //   return(
  //     <p> No data... </p>
  //   )
  // } else {
  //   return (
  //     <div>
  //       <p>HEll</p>
  //       { data.map((d, i)=>(
  //         <p key={i}>{d?.name?.common}</p>
  //       )) }
  //     </div>
  //   )
  // }
  return (
    <>
      <p>hello</p>
    </>
  )
  
 
}

export default App