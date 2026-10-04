import { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

import Signup from "./Signup";
import Dashboard from "./Dashboard";
import ExitRequest from "./ExitRequest";
import ExitInterview from "./ExitInterview";
import ManagerDashboard from "./ManagerDashboard";

import "./App.css";


function Login() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();


  const handleLogin = async (e) => {

    e.preventDefault();

    if (username === "" || password === "") {

      alert("Please enter username and password");

      return;
    }


    try {

      const response = await fetch(
        "http://localhost:8080/api/login",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            username: username,
            password: password,
          }),
        }
      );


      const data = await response.json();


      if (
        response.ok &&
        data.message === "Login successful"
      ) {

        alert("Login successful!");


        // Manager login
        if (data.role === "MANAGER") {

          navigate("/manager-dashboard", {
            state: {
              username: data.username,
            },
          });

        }

        // Employee login
        else {

          navigate("/dashboard", {
            state: {
              username: data.username,
            },
          });

        }

      } else {

        alert(data.message);

      }

    } catch (error) {

      console.error(error);

      alert("Cannot connect to backend");

    }
  };


  return (

    <div className="login-page">

      <div className="login-container">


        <div className="login-header">

          <h1>
            Employment Exit Management System
          </h1>

          <p>
            Employee Exit Management Portal
          </p>

        </div>


        <form onSubmit={handleLogin}>


          <div className="form-group">

            <label>
              Username
            </label>


            <input
              type="text"
              placeholder="Enter your username"
              value={username}
              onChange={(e) =>
                setUsername(e.target.value)
              }
            />

          </div>



          <div className="form-group">

            <label>
              Password
            </label>


            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) =>
                setPassword(e.target.value)
              }
            />

          </div>



          <button type="submit">
            Login
          </button>


        </form>



        <div
          style={{
            textAlign: "center",
            marginTop: "20px",
          }}
        >

          <p>
            Don't have an account?
          </p>


          <button
            type="button"
            onClick={() =>
              navigate("/signup")
            }
          >
            Sign Up
          </button>

        </div>


      </div>

    </div>

  );
}



function App() {

  return (

    <Routes>

      {/* Login */}

      <Route
        path="/"
        element={<Login />}
      />


      {/* Signup */}

      <Route
        path="/signup"
        element={<Signup />}
      />


      {/* Employee Dashboard */}

      <Route
        path="/dashboard"
        element={<Dashboard />}
      />


      {/* Employee Exit Request */}

      <Route
        path="/exit-request"
        element={<ExitRequest />}
      />


      {/* Employee Exit Interview */}

      <Route
        path="/exit-interview"
        element={<ExitInterview />}
      />


      {/* Manager Dashboard */}

      <Route
        path="/manager-dashboard"
        element={<ManagerDashboard />}
      />

    </Routes>

  );

}


export default App;