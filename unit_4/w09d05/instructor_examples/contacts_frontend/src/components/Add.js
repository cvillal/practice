import {useState} from 'react'

const Add = (props) => {
  let emptyPerson = { name: '', age: ''}
  const [person, setPerson] = useState(emptyPerson)

  const handleChange = (event) => {
    setPerson({...person, [event.target.name]: event.target.value})
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    props.handleCreate(person)
    setPerson(emptyPerson)
  }


  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name: </label>
        <input type="text" name="name" value={person.name} onChange={handleChange} />
        <br />
        <br />
        <label htmlFor="age">Age: </label>
        <input type="number" name="age" value={person.age} onChange={handleChange}/>
        <input type="submit"/>
      </form>
    </>
  )
}

export default Add
