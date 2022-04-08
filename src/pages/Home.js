import React from "react"
import "../styles/Home.css"
import {
  FaFacebookSquare,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa"

const Home = () => {
  return (
    <div className="Header">
      <div className="title">
        <img
          className="ticketIcon"
          src="https://th.bing.com/th/id/R.376d5eb97e12141142e1b2eceeac7c5b?rik=gOOTjBC7wsgACQ&riu=http%3a%2f%2fclipart-library.com%2fimages_k%2fticket-clipart-transparent%2fticket-clipart-transparent-9.png&ehk=2acrXCfUVQO76QJMLvl64%2fJtgNmSrXR6AGSPZVmJcic%3d&risl=&pid=ImgRaw&r=0"
          alt=""
        ></img>
        <h1>NFTickets</h1>
      </div>

      <div className="navBar">
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/events">Events</a>
          </li>
          <li>
            <a href="https://nftickets-b4de31clp-wytana.vercel.app/">
              NFTickets
            </a>
          </li>

          <input type="text" placeholder="Search.."></input>
        </ul>

        <div className="Login">
          <button className="loginButton">
            <img src="src/images/login.png" alt="" />
            <a href="Login">Login</a>
          </button>
        </div>
      </div>
      {/* Content */}
      <div className="content">
        <div className="Concerts">
          <h1 className="concerttitle">Events</h1>

          <div className="concertList"></div>
        </div>

        <div className="Sports">
          <h1 className="sportstitle">NFTickets</h1>

          <div className="sportsList"></div>
        </div>
      </div>
      {/* Footer */}
      <div className="footer">
        <div className="footercontent">
          <div className="footerTitle">
            <img
              className="ticketIcon"
              src="https://th.bing.com/th/id/R.376d5eb97e12141142e1b2eceeac7c5b?rik=gOOTjBC7wsgACQ&riu=http%3a%2f%2fclipart-library.com%2fimages_k%2fticket-clipart-transparent%2fticket-clipart-transparent-9.png&ehk=2acrXCfUVQO76QJMLvl64%2fJtgNmSrXR6AGSPZVmJcic%3d&risl=&pid=ImgRaw&r=0"
              alt=""
            ></img>
            <h1>NFTickets</h1>
          </div>

          <div className="copyright">
            <p className="copyrightText">
              © 2022 NFTickets Inc. All rights reserved.
            </p>
          </div>

          <div className="socials">
            <FaFacebookSquare className="facebookIcon" alt="fb" />
            <FaInstagram className="instagramIcon" alt="insta" />
            <FaTwitter className="twitterIcon" alt="twitter" />
            <FaYoutube className="youtubeIcon" alt="youtube" />
            <FaLinkedin className="linkedinIcon" alt="linkedin" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
