// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import Cookies from "js-cookie";
// import SignInForm from "./Signinform";
// import "./Login.css";

// const LogInForm = () => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const navigate = useNavigate(); // ✅ This must be inside the component

//   const handleUsernameChange = (e) => {
//     setUsername(e.target.value);
//   };

//   const handlePasswordChange = (e) => {
//     setPassword(e.target.value);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!username || !password) {
//       setError("Please enter both username and password");
//       return;
//     }

//     const userDetails = {
//       username,
//       password,
//     };

//     try {
//       const response = await fetch("http://localhost:3001", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(userDetails),
//       });

//       if (response.headers.get("Content-Type")?.includes("application/json")) {
//   const data = await response.json();

//   if (response.ok && data?.success) {
//     Cookies.set("username", username);
//     Cookies.set("password", password);
//     window.location.href = "/";
//   } else {
//     setError(data?.message || "Invalid credentials");
//   }
// } else {
//   const text = await response.text(); // fallback if not JSON
//   console.error("Unexpected response:", text);
//   setError("Server did not return JSON. Check backend.");
// }

//     } catch (error) {
//       console.error("Login error:", error);
//       setError("An error occurred during login.");
//     }
//   };

//   return (
//     <>
//       <SignInForm />
//       <form onSubmit={handleSubmit}>
//         <label>
//           Username:
//           <input type="text" value={username} onChange={handleUsernameChange} />
//         </label>
//         <br />
//         <label>
//           Password:
//           <input type="password" value={password} onChange={handlePasswordChange} />
//         </label>
//         <br />
//         <button type="submit">Log in</button>
//         {error && <div style={{ color: "red" }}>{error}</div>}
//       </form>
//     </>
//   );
// };

// export default LogInForm;

// Login.jsx
import React, { useState } from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import "../../styles/main.scss";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const storedUsername = Cookies.get("username");
    const storedPassword = Cookies.get("password");

    if (username === storedUsername && password === storedPassword) {
      // ✅ Login success (matches cookie)
      console.log("User login successfully")
      navigate("/");
    } else {
      alert("Invalid credentials: Doesn't match cookie");
    }
  }

  return (
    <div className="login-page">
      <div className="login-box">
        <h2 className="title">Login</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            className="input-field"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="input-field"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className="login-button">
            Sign In
          </button>
        </form>
        <div className="extra-links">
          <a href="/forgot">Forgot Password?</a>
          <a href="/signup">New user? Sign Up</a>
        </div>
      </div>
    </div>
  );
};

export default Login;
