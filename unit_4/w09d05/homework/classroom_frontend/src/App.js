import './App.css';
import axios from 'axios'
import {useState, useEffect} from 'react'
import Add from './components/Add'
import Edit from './components/Edit'


const App = () => {

  const [lessons, setLessons] = useState([])

  const getLessons = () => {
    axios
      .get('http://localhost:8000/api/lessons')
      .then(
        (response) => setLessons(response.data),
        (err) => console.error(err)
      )
      .catch((error) => console.error(error))
  }

  const handleCreate = (addLessons) => {
    axios
      .post('http://localhost:8000/api/lessons', addLessons)
      .then((response) => {
        console.log(response)
        getLessons()
      })
  }

  const handleDelete = (event) => {
    axios
      .delete('http://localhost:8000/api/lessons/' + event.target.value)
      .then((response) => {
        getLessons()
      })
  }

  const handleUpdate = (editLessons) => {
    console.log(editLessons)
    axios
      .put('http://localhost:8000/api/lessons/' + editLessons.id, editLessons)
      .then((response)=>{
        getLessons()
      })
  }

  useEffect(() => {
    getLessons()
  }, [])

  return (
    <>
        <h1>HELLO</h1>
        <Add handleCreate={handleCreate}/>
        <div className='lessons'>
        {lessons.map((lesson) => {
          return (
            <div className='lesson' key={lesson.id}>
              <h4>Lesson: {lesson.name}</h4>
              <h5>Given on: {lesson.date_of_lesson}</h5>
              <h5>Needs Practice?  {lesson.needs_practice ? "Yes" : "No"}</h5>
              <h5>Notes <br/>
              {lesson.notes}</h5>
              <Edit handleUpdate={handleUpdate} id={lesson.id} />
              <button onClick={handleDelete} value={lesson.id}>X</button>
        </div>
          )
        })}
        </div>



      
    </>
  );
}

export default App
