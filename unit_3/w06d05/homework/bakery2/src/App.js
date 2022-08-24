import { useState } from 'react';
import './App.css';

function App() {

  const bakingTools = [{
    name:'no bake pudding',
    price: 0,
    clickMakes: 1,
  },{
    name:'easy bake oven',
    price: 5,
    clickMakes: 5
  },{
    name: 'old toaster oven',
    price: 25,
    clickMakes:50
  },{
    name: 'convection oven',
    price: 250,
    clickMakes: 100
  },{
    name: 'factory',
    price: 500,
    clickMakes:250
  }]

 const [money, setMoney] = useState(0)
  const [wallet, setWallet] = useState(1)

  const Bake = () => {
    setWallet (wallet + bakingTools.clickMakes)
    if (wallet >= 1000) {
      console.log('congrats you win')
    }
  }

  const BuyNewTool = () => {
    setWallet (wallet -= bakingTools[0].price)
  }


  return (
    <div >
      
  <h1>Baking Galore</h1>
  <Bake/>
  <p>{Bake}</p>
  <button onClick={Bake}> Click and Bake</button>
    </div>
  );
}

export default App;
