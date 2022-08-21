import logo from './logo.svg';
import './App.css';
import {useState} from 'react'
import userEvent from '@testing-library/user-event';

const App = () => {
  const bakingTools = [{
    name:'no bake pudding',
    price: 0,
    click: 1,
  },{
    name:'easy bake oven',
    price: 5,
    click: 5
  },{
    name: 'old toaster oven',
    price: 25,
    click:10
  },{
    name: 'convection oven',
    price: 250,
    click:2
  },{
    name: 'factory',
    price: 500,
    click:2
  }]
  
  const baker = {
    money: 0,
    bakingTool: bakingTools[0],
    income:1
  }
  
  const bake = () => {
    setIncome (money+income)
    if (baker.income >= 1000) {
      console.log('congrats you win')
    }
  }
  
  const [money, setMoney] = useState(0)
  const [income, setIncome] = useState(1)


  return (
    <div>
     <h1>Bake Your Days Away</h1>
     <h3>{bake}</h3>
     <button onClick={() => setMoney(money + 1)}>no bake pudding</button>


    </div>
  );
}

const noBakeComponent = () => {
  return (
    <div className='nobake'>
      <button onClick={()=> setMoney(money+1)}>no bake pudding</button>
      
    </div>
  )
}

export default App;
