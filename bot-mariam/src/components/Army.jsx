import React from "react";
function Army({bot,army,setArmy,container,deleting,settingArmy}){
  const {name,health,damage,armor,bot_class,catchphrase,avatar_url}= bot

  function handleClick(){
    
     if(container==="collectionContainer") {
      if(!Boolean(army.find(theBot => theBot.id === bot.id))){
          setArmy([...army,bot])
      
         }
     } else{
      settingArmy(bot)
     }
  }
  function setting(event){
event.preventDefault();
event.stopPropagation();
deleting(bot)
  }
  return(
      <div className="displayItems" onClick={handleClick}>
        <img src={avatar_url}/>
        <h3>{name}</h3>
        <p>{catchphrase}</p>
      <div className="icons">
              <div>💔<span>{health}</span></div>
              <div>⚡<span>{damage}</span></div>
              <div>🛡<span>{armor}</span></div>
      </div>
      {container==="armyContainer" ? <button className = "button" onClick={setting}>x</button> : null}
      </div>
  )
}
export default Army;
  
  
  