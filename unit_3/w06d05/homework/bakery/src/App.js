import logo from './logo.svg';
import './App.css';
import {useState} from 'react'
import userEvent from '@testing-library/user-event';

const App = () => {
  return(
  <div>
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
    alert('you can buy an easy bake oven now')
  }

  return (
    <div className='nobake'>
      <h3>{money}</h3>
      <button onClick={()=> setMoney(money+1)}>no bake pudding</button>
      
    </div>
  )
}

const EasyBakeComponent = () => {
  const [money, setMoney] = useState(0)

  if(money >=25){
    alert('you can buy an old toaster oven now')
  }

  return (
    <div className='nobake'>
      <h3>{money}</h3>
      <button onClick={()=> setMoney(money+5)}>easy bake oven</button>
      
    </div>
  )
}

const OldToasterOvenComponent = () => {
  const [money, setMoney] = useState(0)

  if(money >=250){
    alert('you can buy a convection oven now')
  }

  return (
    <div className='nobake'>
      <h3>{money}</h3>
      <button onClick={()=> setMoney(money+25)}>old toaster oven</button>
      
    </div>
  )
}

const ConvectionOvenComponent = () => {
  const [money, setMoney] = useState(0)

  if(money >=500){
    alert('you can buy an old toaster oven now')
  }

  return (
    <div className='nobake'>
      <h3>{money}</h3>
      <button onClick={()=> setMoney(money+250)}>convection oven</button>
      
    </div>
  )
}

const FactoryComponent = () => {
  const [money, setMoney] = useState(0)

  if(money >=1000){
    alert("You've made it! You win the Bake-off!")
  }

  return (
    <div className='nobake'>
      <h3>{money}</h3>
      <button onClick={()=> setMoney(money+500)}>easy bake oven</button>
      
    </div>
  )
}




export default App;
