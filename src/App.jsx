import { useState, useEffect } from 'react'
import axios from 'axios'

import './App.css'

function App() {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  

// access API on localhost we can access to console and we get data
  const restCountriesApiCall = async() =>{
    try {
      const response = await axios.get('https://restcountries.com/v3.1/all')
      setData(response.data);
      }
         catch(err) {
          console.log(err)
         }
         finally{
          setLoading(false)
         }
        }
        useEffect(() =>{
         restCountriesApiCall()
        },[])


  return (
    <>
     <div>welcome to my react countries App</div>
    </>
  )
}

export default App
