import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';


const App = () => {

let [questions, setQuestions] = useState([])
let [score, setScore] = useState(0)

const getQuestions = () => {
  axios.get('http://jservice.io/api/random').then((response) => {
    setQuestions(response.data)
    
    // console.log(response)
  })
}

useEffect(() => {
  getQuestions()
}, [])

const NewQuestionsComponent = () => {
  setQuestions(questions.question)
}

const SubtractPointComponent = () => {
  setScore(score -= questions[0].value)
}
const AddPointComponent = () => {
  setScore(score += questions[0].value)
}
const ResetComponent = () => {
  setScore(score = 0)
}
const Toggle = () => {
  let element =
  document.getElementById('myDiv');
  element.classList.toggle('mystyle');
}


return(
  <div className="container">
    <h1>The Game is Jeopardy</h1>
    <p>Your score: {score}</p>
    <button className="button" onClick={SubtractPointComponent}>Score's going DOWN</button>
    <button className='button' onClick={AddPointComponent}>Score's going UP</button>
    <button className='button' onClick={ResetComponent}>Reset Score</button>

    {questions.map((question) => {
      return (
      <div>
          <p>The Category is...<span style={{fontWeight:'bold'}}>{question.category.title}</span></p>
          <p>The Points are...{question.value}</p>        
          <p id="q">And the Question is:  {question.question}</p>
          
          <button className='button' onClick={getQuestions}>click for trivia</button>
  
        <p>And the answer is...<button className='button' onClick={Toggle}> Click to Reveal</button></p>
        <p className="mystyle" id="myDiv">{question.answer}</p>
      </div>
      )
    })}
    
  </div>
 
)




}
export default App;
