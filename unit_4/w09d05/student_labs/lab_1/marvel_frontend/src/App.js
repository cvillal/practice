import './App.css';
import { useState, useEffect} from 'react';
import axios from 'axios'
import AddForm from './components/AddForm'
import EditForm from './components/EditForm'


const App= () => {
  let [character, setCharacter] =useState([])
  
  const getCharacters = () => {
    axios
    .get('http://localhost:8000/api/characters')
    .then(
      (response) => setCharacter(response.data),
      (err) => console.error(err)
    )
    .catch((error) => console.error(error))
  }

  useEffect(() => {
    getCharacters()
  }, [])
  
  return (
    <div className="container">
      <h1>Hello Marvelers</h1>
      {character.map((character) => {
        return(
          <>
          <h3>Name: {character.name}</h3>
          <h4>Age: {character.age}</h4>
          <h4>Main Power: {character.main_power}</h4>
          <h4>Team: {character.team}</h4>
        </>
        )



      }
       
      )}
    </div>
  );
}

export default App;
