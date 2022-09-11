import './App.css';
import axios from 'axios'
import {useState, useEffect} from 'react'




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

  useEffect(() => {
    getLessons()
  }, [])

  return (
    <>
        <h1>HELLO</h1>
        <div className='lessons'>
        {lessons.map((lesson) => {
          return (
            <div className='lesson' key={lesson.id}>
              <h4>Lesson: {lesson.name}</h4>
              <h5>Given on: {lesson.date_of_lesson}</h5>
              <h5>Needs Practice?  {lesson.needs_practice}</h5>
              <h5>Notes <br/>
              {lesson.notes}</h5>

        </div>
          )
        })}
        </div>



      
    </>
  );
}

export default App
