import React from "react"
import Sportcard from "./Sportcard"

const Sport = (games) => {
  const gamesInfo = games.games

  // console.log(gamesInfo[0].images)

  console.log(games.games)

  return (
    <div className="sport">
      <div className="sport-header">
        <h1> Event Tickets </h1>
      </div>

      <div className="sport-2">
        {gamesInfo.map((game, id) => {
          return (
            <Sportcard
              imgs={game.images}
              time={
                game.dates.start.localTime
                  ? game.dates.start.localTime
                  : "Not Avaliable "
              }
              //date={game.dates.start.localDate}
              date={game.dates.start.localDate}
              name={game.name}
              where={game._embedded}
              //   price={game.priceRanges ? game.priceRanges : "Not Avaliable "}
              price={game.priceRanges ? game.priceRanges : "Not Avaliable "}
              key={id}
            />
          )
        })}
      </div>
    </div>
  )
}

export default Sport
