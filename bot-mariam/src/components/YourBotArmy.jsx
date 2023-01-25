import React from "react";
import Army from "./Army";


function YourBotArmy({army,settingArmy,deleting}){
    return(
        <div className="top">
 {army.map(bot=>{
            return (
            <Army key={bot.id} bot={bot}army={army} deleting={deleting} container="armyContainer"settingArmy={settingArmy}/>
            )
            })}
        </div>
    )
}
export default YourBotArmy;

