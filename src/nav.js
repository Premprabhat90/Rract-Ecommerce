import React from "react";
import { Link } from "react-router-dom";
import "./nav.css";
import { FaShoppingCart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa6";
import { FaRegUser } from "react-icons/fa";

const Nav = ({ auth, setAuth, userDetail }) => {
  const logout = () => {
    setAuth(false);
  };

  return (
    <div className="nav">
      <div className="container">
        <div className="top_bar">
          <p>Get free shipping - free 30 day money back guarantee</p>
          {auth ? (
            <>
              <p>
                <Link to={"/login"} className="link" onClick={logout}>
                  Logout
                </Link>
              </p>
            </>
          ) : (
            <p>
              <Link to={"/login"} className="link">
                login
              </Link>
              /
              <Link to={"/register"} className="link">
                Register
              </Link>
            </p>
          )}
        </div>
        <div className="mid_bar">
          <div className="contant">
            <div className="logo">
              <img src="/image/logo.jpeg" alt="logo" />
            </div>
            <div className="search_bar">
              <input type="text" placeholder="Search Products..." />
              <button>Search</button>
            </div>
            <div className="icons">
              <div className="icon">
                <Link to={"/cart"}>
                  <FaShoppingCart />
                </Link>
              </div>
              <div className="icon">
                <FaRegHeart />
              </div>
            </div>
          </div>
        </div>
        <div className="bottam_bar">
          <div className="user_detail">
            <div className="icon">
              <FaRegUser />
            </div>
            <div className="detail">
              {auth ?
                <>
                  <h2>{userDetail.Name}</h2>
                  <p>{userDetail.Email}</p>
                </>
               :
                <>
                  <h2>Please, Sign In</h2>
                </>
              }
            </div>
          </div>
          <ul>
            <li>
              <Link to={"/"} className="link">Home</Link>
            </li>
            <li>
              <Link to={"/shop"} className="link">Shop</Link>
            </li>
            <li>
              <Link to={"/about"} className="link">About</Link>
            </li>
            <li>
              <Link to={"/contact"} className="link">Contact</Link>
            </li>
          </ul>
          <div className="offer">
            <h2>30% off in winter sale</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
