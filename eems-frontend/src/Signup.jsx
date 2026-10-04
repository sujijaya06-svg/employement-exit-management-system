import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";

function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("EMPLOYEE");

  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();

    if (username === "" || password === "") {
      alert("Please enter username and password");
      return;
    }

    try {
      const response = await fetch("http://localhost:8080/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username,
          password: password,
          role: role,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Signup successful!");
        navigate("/");
      } else {
        alert(data.message || "Signup failed");
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
          <h1>Create Account</h1>
          <p>Employment Exit Management System</p>
        </div>

        <form onSubmit={handleSignup}>

          <div className="form-group">
            <label>Username</label>

            <input
              type="text"
              placeholder="Enter username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Password</label>

            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Role</label>

            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
            >
              <option value="EMPLOYEE">Employee</option>
              <option value="MANAGER">Manager</option>
            </select>
          </div>

          <button type="submit">
            Sign Up
          </button>

          <button
            type="button"
            onClick={() => navigate("/")}
            style={{ marginTop: "10px" }}
          >
            Back to Login
          </button>

        </form>

      </div>
    </div>
  );
}

export default Signup;