import React, {useEffect, useState} from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";


function BotsPage() {
  const [theBots, setBots] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/bots') 
    .then(data => data.json())
    .then(data => setBots(data)) 
  }, [])
   
  
  return (
    <div>
      <YourBotArmy newBots={theBots}/>
      <BotCollection  bot={theBots} />
    </div>
  )
}

export default BotsPage;