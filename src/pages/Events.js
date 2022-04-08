import "../styles/Events.css"
import React from "react"
import About from "../components/About"
import Calltoaction from "../components/Calltoaction"
import Navbar from "../components/Navbar"
import Sport from "../components/Sport"
import { useEffect, useState } from "react"

const Events = () => {
  const [games, setGames] = useState([])
  // const [time, setTime] = useState ([])

  useEffect(() => {
    // **********
    fetch(
      "https://app.ticketmaster.com/discovery/v2/events.json?apikey=VipiE7zQH6UYqMkh5ZpGSZP2U4M1gOrm"
    )
      .then((response) => response.json())
      .then((json) => {
        setGames(json._embedded.events)
      })
  }, [])

  return (
    <div className="events">
      <About />
      <Calltoaction />
      <Sport games={games} />
      <Navbar />
    </div>
  )
}

export default Events
