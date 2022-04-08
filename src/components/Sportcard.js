import React from "react"

const Sportcard = ({ date, name, where, price, imgs, time }) => {
  // Imgages, Time and Date Time
  // const pictures = imgs.imgs[0]
  // const date = imgs.date.start.localDate
  // const start = date.start.localTime
  // const names = imgs.name
  // const where = imgs.where.venues[0].name
  // const prices = imgs.price
  // const price = prices.map ((prices) => {
  //     return prices.min + '' +  prices.max
  //   });
  // const priceMax = imgs.price[0].max
  // const priceMin = imgs.price[0].min

  return (
    <div className="sport-card-container">
      <div className="sport-card-img">
        <img id="sport-pic" src={imgs[0].url} alt="" />
      </div>

      <div className="sport-card-info">
        <h1> {name} </h1>
        <h2> {date} </h2>
        <h3> {time} </h3>
        <h4> {where.venues[0].name} </h4>
        <p>
          {" "}
          ${price[0].min} - ${price[0].max}{" "}
        </p>
        <button className="see-tickets"> See Tickets </button>
        {/* {prices.map ((price) => {
                return <p> {price.min + '-' + price.max} </p>
              })}  */}

        {/* Hover and tanslte */}
      </div>
    </div>
  )
}

export default Sportcard
