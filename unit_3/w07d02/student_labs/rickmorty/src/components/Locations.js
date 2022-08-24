//IMPORTS
import axios from 'axios'
import {useState, useEffect} from 'react'

//LOCATIONS FUNCTION
const Locations = () => {
    
    // CREATE STATES
    let [locations, setLocations] = useState([])

    //FUNCTION TO IMPORT DATA FROM API
    const updateLocations = () => {
        axios.get('https://rickandmortyapi.com/api/location').then((response)=> {
          // console.log(response.data.results)
          setLocations(response.data.results)
        })
      }
      
      //INVOKES FUNCTION ABOVE TO LOAD DATA INTO STATE - ONCE - "SEEDS DATA"
      useEffect(() => {
        updateLocations()
      }, [])

      //WHAT PRINTS ON MAIN APP.JS PAGE
      return (
        <div>
            
        {locations.map((locations) => {
            return (
            <div  key={locations.id} className="cardFlex">
            <h1>{locations.name}</h1>
                <ul id='places'>
                    <li>Location: {locations.type}</li>
                    <li>Dimension: {locations.dimension}</li>
                </ul>
            </div>
        )
    })}
    </div>
    )}


export default Locations