import {useState} from 'react'


const AddForm = (props) => {
    let emptyCharacter = {name:'', age:'', main_power:'', team:''}
    const [character, setCharacter] = useState(emptyCharacter)
    
return(
    <>
        <form >
            <label htmlFor="name">Name: </label>
            <input type="text" name="name"/>
            <br/>
            <label htmlFor="age">Age:</label>
            <input type="number" name="age"/>
            <br/>
            <label htmlFor="power">Main Power: </label>
            <input type="text" name="main_power"/>
            <br/>
            <label htmlFor="team">Team: </label>
            <input type="text" name="team"/>  
        </form>
    </>
)
}

export default AddForm