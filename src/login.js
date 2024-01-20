import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import "./auth.css";
import { db, app } from "./firebase";
import { collection, getDocs } from "firebase/firestore";

const Login = ({ setUserDetail, setAuth }) => {
  // starting the input value useing usestate hooks
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

    const navigate = useNavigate()

  // Create Database reference to store hooks
  const dberf = collection(db, "Users");

  //Creating User Account On Firebase
  const authentication = async (e) => {
    // Creating User Account
    e.preventDefault();
    if (email.length === 0 || password.length === 0) {
      alert("All Fields are required");
    } else {
      try {
        // e.preventDefault()
        const createAccount = await app
          .auth()
          .signInWithEmailAndPassword(email, password);
        if (createAccount) {
          //Fetcing the userData from database
          const getData = await getDocs(dberf);
          const data = getData.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          const userdata = data.find((info) => {
            return info.Email === email;
          });
          setUserDetail(userdata);
          alert("User Login Succesfully");
          setAuth(true);
          navigate('/')
        } else {
          alert("Error While Login User");
        }
      } catch (error) {
        alert(error);
      }
    }
  };
  return (
    <>
      <div className="auth">
        <div className="container">
          <h2>prem</h2>
          <div className="icon">
            <FaShoppingCart />
          </div>
          <div className="form">
            <div className="box">
              <input
                type="email"
                placeholder="E-mail * "
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></input>
            </div>
            <div className="box">
              <input
                type="password"
                placeholder="Password * "
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              ></input>
            </div>
            <button onClick={authentication}>Login</button>
            <p>
              Don't Have Account <Link to="/register">Register</Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
