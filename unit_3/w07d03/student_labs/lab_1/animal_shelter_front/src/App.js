import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';


const App = () => {

    //Hooks/States
    const [animals, setAnimals] = useState([]);
    const [newImage, setNewImage] = useState('');
    const [newName, setNewName] = useState('');
    const [newSpecies, setNewSpecies] = useState('');
    const [reserved, setReserved] = useState(false);
   
    
    //Functions/components?

    const getAnimals = () => {
      axios.get('http://localhost:3000/animals').then((response) =>{
          
          setAnimals (response.data)
        

      });
    }

    const reservedForAdoption = () =>{
      if(reserved === false) {
         getAnimals('')
      }
    }


    const submitNewImage = (event) => {
        setNewImage(event.target.value);

    }

    const submitNewName = (event) => {
        setNewName(event.target.value);
    }

    const submitNewSpecies = (event) => {
        setNewSpecies(event.target.value);
    }


    const createNewAnimalCard = (event) => {
      event.preventDefault();
      // console.log(newDescription);
      // console.log(newComplete);
      axios.post(
        'http://localhost:3000/animals',
        {
          image:newImage,
          name:newName,
          species:newSpecies,
          reservedForAdoption:reserved
        }
      ).then(()=> {
        axios
            .get('http://localhost:3000/animals')
            .then((response) => {
                setAnimals(response.data)
            })
      })
  }

    //effect
    useEffect(() => {
      getAnimals()
    }, [])

    const handleDelete = (animalData) => {
      // console.log(animalData);
      axios
          .delete("http://localhost:3000/animals/"+ animals._id)
          .then(() => {
            axios
              .get('http://localhost:3000/animals')
              .then((response) => {
                  setAnimals(response.data)
              })
          })
    }




    //Return - what actually gets printed on the page
    return(
      <main>
        <h1>The Animal Shelter</h1>
          <section>
            <h2>The Animals</h2>
              <div className='container'>
                  {animals.map((animal) => {
                    return(
                      <div className='card' key={animal._id}>
                        <img src={animal.image} style= {{height:"200px"}}/>
                        <p>{animal.name}</p>
                        <p>{animal.species}</p>
                        <button onClick={ (event) => {handleDelete(animal)}}>Delete</button>
                      </div>
                    )
                  })}
              </div>
          </section>
          <section>
            <h2>Create New Animal Card</h2>
            <form onSubmit={createNewAnimalCard}>
              Image: <input type="String" name="image" onChange={submitNewImage}/>
              Name: <input type="text" onChange={submitNewName}/>
              Species: <input type="text" onChange={submitNewSpecies}/>
              <input type="submit" value="Create new Animal Card"/>
            </form>
          </section>
      </main>
      )

}


export default App;
