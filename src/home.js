import React from 'react'
import "./home.css";
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
      <div className="home">
        <div className="top_banner">
          <div className="content">
            <div className="info">
              <h2>X box series s:for best gaming</h2>
              <p>Get <span>30% off</span> This Week</p>
              <Link to='/shop'><button>Discover Now</button>
              </Link>
            </div>
            <div className="img_box">
              <img src="/image/bg.png" alt="bg" ></img>
            </div>
          </div>
        </div>
      </div>
    
    </>
  )
}

export default Home