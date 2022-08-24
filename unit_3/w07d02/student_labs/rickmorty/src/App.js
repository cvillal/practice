//IMPORTS
import axios from 'axios'
import {useState, useEffect} from 'react'
import Characters from './components/Characters'
import Locations from './components/Locations'
import './App.css'
import 'bootstrap/dist/css/bootstrap.css'



//APP FUNCTION - RENDERS ENTIRE APP
const App = () =>  {
  //STATES
  let [hidden, setHidden] = useState('invisible')
  let [hideLocation, setHideLocation] = useState('hidden')

  const showCharacters = () => {
    if(hidden === 'invisible'){
      setHidden('')
    }else {
      setHidden('invisible')
    }
    setHideLocation('hidden')
  }

  const showLocations = () => {
    if(hideLocation === 'hidden'){
      setHideLocation('')
   }else{
      setHideLocation('hidden')
  }
  setHidden('invisible')
  }

//WHAT PRINTS/HAPPENS IN THE BROWSER
return(
    <div className='wrapper'>
      <h1>Rick and Morty's World Directory</h1>
      <button className='mainButton' onClick={showCharacters}>Show me the Characters</button>
      <button className='mainButton' onClick={showLocations}>Show me the Locations</button>
      <div id={hidden}>
        <Characters/>
      </div>
      <div id={hideLocation}>
        <Locations/>
      </div>
    </div>
  )
}

export default App;
