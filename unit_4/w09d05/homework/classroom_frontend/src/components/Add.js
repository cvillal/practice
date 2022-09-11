import React, {useState, useEffect} from 'react'

const Add = (props) => {
    let emptyLesson = {name: '', notes: '', date_of_lesson: '', needs_practice:''}
    const [lessons, setLessons] = useState(emptyLesson)

    const handleChange = (event) => {
        setLessons({...lessons, [event.target.name]: event.target.value})
      }
    
      const handleSubmit = (event) => {
        event.preventDefault()
        props.handleCreate(lessons)
      }
    

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Lesson: </label>
                <input type="text" name="name" value={lessons.name} onChange={handleChange}/>
                <br/>
                <label htmlFor="date_of_lesson">Given on: </label>
                <input type="date" name="date_of_lesson" value={lessons.date_of_lesson} onChange={handleChange} />
                <br/>
                <label htmlFor="needs_practice">Needs Practice?</label>
                <input type= "checkbox" name="needs_practice" value={lessons.needs_practice} onChange={handleChange} />
                <br/>
                <label htmlFor="notes">Notes:</label>
                <input type="text" name="notes" value={lessons.notes} onChange={handleChange}/>
                <input type="submit" />
            </form>
        
        
        </>
    )
}

export default Add