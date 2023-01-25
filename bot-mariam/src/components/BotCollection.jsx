import Army from"../components/Army"
function BotCollection({bots,army,setArmy}){
    return(
        <div className="style">
        {bots.map(bot=>{
            return (
                <Army key={bot.id} bot={bot} army={army} setArmy={setArmy} container="collectionContainer"/>
            )
            })}
        </div>
    )
}
export default BotCollection;