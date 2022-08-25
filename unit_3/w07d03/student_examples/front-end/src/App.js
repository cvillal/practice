import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {

  //hooks
    const [newDescription, setNewDescription] = useState('');
    const [newComplete, setNewComplete] = useState(false);
    const [todos, setTodos] = useState([]);

    const handleNewDescriptionChange = (event) => {
      // console.log(event.target.value)
      setNewDescription(event.target.value);
    }

    const handleNewCompleteChange = (event) => {
      // console.log(event.target.checked);
      setNewComplete(event.target.checked);
    }

    const handleNewTodoFormSubmit = (event) => {
        event.preventDefault();
        // console.log(newDescription);
        // console.log(newComplete);
        axios.post(
          'http://localhost:3000/todos',
          {
            description:newDescription,
            complete:newComplete
          }
        ).then(()=> {
          axios
              .get('http://localhost:3000/todos')
              .then((response) => {
                  setTodos(response.data)
              })
        })
    }

    useEffect(() => {
      axios
          .get('http://localhost:3000/todos')
          .then((response) => {
              // console.log(response.data);
              setTodos(response.data)
          })
    }, [])

    const handleDelete = (todoData) => {
      // console.log(todoData);
      axios
          .delete("http://localhost:3000/todos/"+ todoData._id)
          .then(() => {
            axios
              .get('http://localhost:3000/todos')
              .then((response) => {
                  setTodos(response.data)
              })
          })
    }
    
  
    const handleToggleComplete = (todoData) => {
      // console.log(todoData);
        axios
            .put(`http://localhost:3000/todos/${todoData._id}`,
                {
                  description:todoData.description,
                  complete:!todoData.complete
                }
            )
            .then(() => {
              axios
                  .get('http://localhost:3000/todos')
                  .then((response) => {
                    setTodos(response.data)
                  })
            })

    }


      return(
        <main>
          <h1>Todos List</h1>
          <section>
            <h2>Create a Todos</h2>
            <form onSubmit={handleNewTodoFormSubmit}>
              Description: <input type="text" onChange={handleNewDescriptionChange}/><br/>
              Is Complete: <input type="checkbox" onChange={handleNewCompleteChange}/><br/>
              <input type="submit" value="Create a To Do"/>
            </form>
          </section>
          <section>
              <h2>Todos</h2>
              <ul>
                {
                  todos.map((todos) => {
                    return <li key={todos.id} onClick={(event) => {handleToggleComplete(todos)}}>
                      {
                        (todos.complete)?
                            <strike>{todos.description}</strike>
                          :
                            todos.description
                          }
                      <button onClick={ (event) => {handleDelete(todos)}}>DELETE</button>
                    </li>
                  })
                }
              </ul>
          </section>
        </main>
      )
    }

export default App;
