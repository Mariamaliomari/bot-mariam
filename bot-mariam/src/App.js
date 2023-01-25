
import './App.css';
import { useState,useEffect } from 'react';
import BotCollection from './components/BotCollection';
import YourBotArmy from './components/YourBotArmy';
function App() {
  const[army,setArmy]= useState([])
const [bots,setBots]=useState([])
function settingArmy(bot){
  setArmy(army.filter(theBot => theBot.id!== bot.id))
}
useEffect(()=>{
  fetch("http://localhost:3000/bots")
.then(response=>response.json())
.then(data=>setBots(data))
},[])
function deleting(bot){
  fetch(`http://localhost:3000/bots/${bot.id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json"
    }
  })

  setBots(bots.filter(theBot => theBot.id!== bot.id))
  setArmy(army.filter(theBot => theBot.id!== bot.id))
}
  return (
    <div className="App">
      <YourBotArmy deleting={deleting} army={army}settingArmy={settingArmy} />
      <BotCollection bots={bots} army={army} setArmy={setArmy}/>
    </div>
  );
}

export default App;