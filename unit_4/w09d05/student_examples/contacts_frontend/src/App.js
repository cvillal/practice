import {useState, useEffect} from 'react'
import axios from 'axios'
import Add from './components/Add'
import Edit from './components/Edit'

const App = () => {
  const [people, setPeople] = useState([])

  const getPeople = () => {
    axios.get('http://localhost:8000/api/contacts').then(
      (response) => setPeople(response.data),
      (err) => console.error(err)
    ).catch((error) => console.error(error))
  }

  const handleCreate = (addPerson) => {
    axios.post('http://localhost:8000/api/contacts', addPerson)
    .then((response) => {
      setPeople([...people, response.data]) //adds the id?
    })
  }

  const handleDelete = (deletedPerson) => { //this event is the onclick on the button
    axios.delete('http://localhost:8000/api/contacts/' + deletedPerson.id)
    .then((response) => {
      setPeople(people.filter(person => person.id !== deletedPerson.id))
    })
  }

  const handleUpdate = (editPerson) => {
    axios.put('http://localhost:8000/api/contacts/' + editPerson.id, editPerson)
    .then((response) => {
      setPeople(people.map((person) => {
        return person.id !== editPerson.id ? person : editPerson
      }))
    })
  }

  useEffect(() => {
    getPeople()
  }, [])

  return (
    <>
     <h1>App Component</h1>
     <Add handleCreate={handleCreate}/>
     <div className='people'>
      {people.map((person) =>{
        return(
          <div className='person' key={person.id}>
            <h4>Name: {person.name}</h4>
            <h5>Age: {person.age}</h5>
            <Edit handleUpdate={handleUpdate} person={person}/>
            <button onClick={()=> {handleDelete(person)}} value={person.id}>X</button>
            </div>
        )
      })}
     </div>
    </>
  )
}

export default App;
