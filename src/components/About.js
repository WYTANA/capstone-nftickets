import React from "react"

const About = () => {
  return (
    <div className="about">
      <div className="about-us">
        <h1> Your go-to app for last-mintues tickets with crypto </h1>
        <p>
          {" "}
          Get the best deals on tickets to sports, music, and theather events{" "}
        </p>
      </div>

      <div className="about-section">
        <div className="about-box">
          <img
            id="ticket"
            src="https://img.icons8.com/ios/344/ffffff/ticket-confirmed.png"
            alt="ticket"
          />
          <h4> Gametime Guarantee </h4>
          <p>
            {" "}
            We’ve got your back. When you buy on Gametime, your tickets will be
            on time and authentic – guaranteed.
          </p>
        </div>

        <div className="about-box">
          <img
            id="ticket"
            src="https://img.icons8.com/small/344/ffffff/sale-price-tag.png"
            alt="ticket"
          />
          <h4> Lower Fees, Better Prices</h4>
          <p>
            {" "}
            We’re committed to clear, competitive pricing, using CryptoCurrency.
            If you find a lower price elsewhere, we’ll make up 110% of the
            difference.{" "}
          </p>
        </div>

        <div className="about-box">
          <img
            id="ticket"
            src="https://img.icons8.com/external-outline-juicy-fish/344/ffffff/external-crypto-digital-nomad-outline-outline-juicy-fish.png"
            alt="ticket"
          />
          <h4> Able to use Cryto</h4>
          <p>
            {" "}
            For the first time ever you are able to connect your wallet and
            purchase ticket with Crypto{" "}
          </p>
        </div>
      </div>
    </div>
  )
}

export default About
