import React from "react"

const Navbar = () => {
  return (
    <div className="footer">
      <div className="footer-links">
        <a href="/">Home</a>
        <a href="/">Events</a>
        <a href="/">About</a>
        <a
          href="https://nftickets-b4de31clp-wytana.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          How It Works
        </a>
        <a href="/">Help</a>
        {/* <p> Home </p>
        <p> Events </p>
        <p> About </p>
        <p> How It Works </p>
        <p> Help </p> */}
      </div>

      <div className="logo">NFTickets</div>

      <div className="footer-login">
        <button id="button"> Sign Up </button>
        <button id="button"> Sign In </button>
      </div>

      <div className="footer-social">
        <a href="https://facebook.com">
          {" "}
          <img
            id="footer-icon"
            src="https://img.icons8.com/small/344/ffffff/facebook.png"
            alt=""
          />{" "}
        </a>
        <a href="https://instagram.com">
          {" "}
          <img
            id="footer-icon"
            src="https://img.icons8.com/small/344/ffffff/instagram-new.png"
            alt=""
          />{" "}
        </a>
        <a href="https://twitter.com">
          {" "}
          <img
            id="footer-icon"
            src="https://img.icons8.com/small/344/ffffff/twitter.png"
            alt=""
          />{" "}
        </a>
      </div>
    </div>
  )
}

export default Navbar
