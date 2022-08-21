import logo from './logo.svg';
import './App.css';
import {useState} from 'react'
import userEvent from '@testing-library/user-event';

const App = () => {
  return(
  <div className='container'>
    <h1>Bake Your Days Away Game</h1>
    <NoBakeComponent/>
    <EasyBakeComponent/>
    <OldToasterOvenComponent/>
    <ConvectionOvenComponent/>
    <FactoryComponent/>
  </div>
  )

}

const NoBakeComponent = () => {
  const [money, setMoney] = useState(0)

  if(money >=5){
    alert('You earned $5! You can buy an EASY BAKE OVEN now')
  }

  return (
    <div className='nobake'>
      <h2>Lucky you! You have the chance to start your bakery with<br></br><i>no bake pudding</i></h2>
      <h3>Ready...Set...Click to earn $$ for your next baking tool</h3>
      <h3>{money}</h3>
      <button className='button' onClick={()=> setMoney(money+1)}>NO BAKE PUDDING</button>
      
    </div>
  )
}

const EasyBakeComponent = () => {
  const [money, setMoney] = useState(0)

  if(money >=25){
    alert('You earned $25! You can buy an OLD TOASTER OVEN now')
  }

  return (
    <div className='nobake'>
      <h3>{money}</h3>
      <button className='button' onClick={()=> setMoney(money+5)}>EASY BAKE OVEN</button>
      
    </div>
  )
}

const OldToasterOvenComponent = () => {
  const [money, setMoney] = useState(0)

  if(money >=250){
    alert('You earned $250! You can buy a CONVECTION OVEN now')
  }

  return (
    <div className='nobake'>
      <h3>{money}</h3>
      <button className='button' onClick={()=> setMoney(money+50)}>OLD TOASTER OVEN</button>
      
    </div>
  )
}

const ConvectionOvenComponent = () => {
  const [money, setMoney] = useState(0)

  if(money >=500){
    alert('You earned $500! So close to your goal of having full blown baking business! You can buy a FACTORY now')
  }

  return (
    <div className='nobake'>
      <h3>{money}</h3>
      <button className='button' onClick={()=> setMoney(money+100)}>CONVECTION OVEN</button>
      
    </div>
  )
}

const FactoryComponent = () => {
  const [money, setMoney] = useState(0)

  if(money >=1000){
    alert("You've made it! With your hard work you made $1000! You win the Bake-off endeavour!")
  }

  return (
    <div className='nobake'>
      <h3>{money}</h3>
      <button className='button' onClick={()=> setMoney(money+250)}>FACTORY</button>
      
    </div>
  )
}




export default App;
