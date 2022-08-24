import axios from 'axios'
import {useState, useEffect} from 'react'
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.css'


const Characters = () => {

    let [characters, setCharacters] = useState([])
    

    const updateCharacters = () => {
        axios.get('https://rickandmortyapi.com/api/character').then((response) => {
          // console.log(response.data.results)
          setCharacters(response.data.results)
      
        })
      }
      
      useEffect(() => {
        updateCharacters()
      }, [])
      
      return (
        <div>
            
        {/* <h1 className='title'>Characters</h1> */}
        {characters.map((characters) => {
            return (
            <Card className='card' key={characters.id} style={{width: '18rem'}}>
                <img src={characters.image} className="card-img-top" alt="..."></img>
                <Card.Body>
                    <h5 className='card-title'>{characters.name}</h5>
                </Card.Body>
                <ul>
                    <li className="list-group-item">Status: {characters.status}</li>
                    <li className="list-group-item">Species: {characters.species}</li>
                    <li className="list-group-item">type: {characters.type}</li>
                    <li className="list-group-item">Origin: {characters.origin.name}</li>
                    <li className="list-group-item">Location: {characters.location.name}</li>
                </ul>
            </Card>
        )
    })}
            </div>
    )}





        

export default Characters