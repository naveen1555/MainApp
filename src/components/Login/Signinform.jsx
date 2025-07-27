// import React, { useState } from "react";
// import Cookies from "js-cookie";

// const SignInForm = () => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");

//   const handleUsernameChange = (e) => {
//     setUsername(e.target.value);
//   };

//   const handlePasswordChange = (e) => {
//     setPassword(e.target.value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(`Submitting ${username} ${password}`);
//     // You can perform any necessary validation and submit the form here.
//     Cookies.set("username", username);
//     Cookies.set("password", password);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         Username:
//         <input type="text" value={username} onChange={handleUsernameChange} />
//       </label>
//       <br />
//       <label>
//         Password:
//         <input
//           type="password"
//           value={password}
//           onChange={handlePasswordChange}
//         />
//       </label>
//       <br />
//       <button type="submit">Sign in</button>
//     </form>
//   );
// };

// export default SignInForm;

// Signup.jsx
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "../../styles/main.scss";

// const Signup = () => {
//   const [username, setUsername] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const handleSignup = async (e) => {
//     e.preventDefault();

//     const response = await fetch("/api/signup", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ username, email, password }),
//     });

//     const data = await response.json();

//     if (response.ok && data?.success) {
//       alert("Signup successful! Please log in.");
//       navigate("/login");
//     } else {
//       alert("Signup failed");
//     }
//   };

//   return (
//     <div className="signup-page">
//       <div className="background-squares">
//         {[...Array(15)].map((_, i) => (
//           <div key={i} className="square" />
//         ))}
//       </div>

//       <div className="signup-box">
//         <h2 className="title">Sign Up</h2>
//         <form onSubmit={handleSignup}>
//           <input
//             type="text"
//             placeholder="Username"
//             className="input-field"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//           />
//           <input
//             type="email"
//             placeholder="Email"
//             className="input-field"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//           <input
//             type="password"
//             placeholder="Password"
//             className="input-field"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//           <button type="submit" className="signup-button">
//             Sign Up
//           </button>
//         </form>
//         <div className="extra-links">
//           <a href="/login">Already have an account? Log In</a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Signup;


// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import Cookies from "js-cookie";
// import "../../styles/main.scss";

// const Signup = () => {
//   const [username, setUsername] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");

//   const navigate = useNavigate();

//   const handleSignup = async (e) => {
//     e.preventDefault();
//     setError(""); // clear previous errors

//     try {
//       const response = await fetch("http://localhost:3001/signup", { // ❗ match backend port!
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ username, email, password }),
//       });

//       const data = await response.json();
//       console.log(data); // ✅ safe now

//       if (response.ok && data.success) {
//         Cookies.set("username", username, { expires: 7 });
//         Cookies.set("password", password, { expires: 7 });
//         alert("Signup successful! Please log in.");
//         navigate("/login");
//       } else {
//         setError(data?.message || "Signup failed");
//       }
//     } catch (err) {
//       setError("Invalid server response");
//     }
//   };


//   return (
//     <div className="signup-page">
//       <div className="signup-box">
//         <h2 className="title">Sign Up</h2>
//         <form onSubmit={handleSignup}>
//           <input
//             type="text"
//             placeholder="Username"
//             className="input-field"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//           />
//           <input
//             type="email"
//             placeholder="Email"
//             className="input-field"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//           <input
//             type="password"
//             placeholder="Password"
//             className="input-field"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//           <button type="submit" className="signup-button">
//             Sign Up
//           </button>
//           {error && <p className="error-msg">{error}</p>}

//         </form>
//         <div className="extra-links">
//           <a href="/login">Already have an account? Log In</a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Signup;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import Login from "./LoginForm";
import "../../styles/main.scss";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    setError(""); // Clear error

    try {
      const response = await fetch("https://brightenter.com/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, email, password }),
      });

      const data = await response.json();
      console.log(data);

      if (response.ok && data.success) {
        // Set cookies
        Cookies.set("username", username, { expires: 7 });
        Cookies.set("password", password, { expires: 7 });

        // alert("Signup successful (dummy check passed)");
        navigate("/login");
      } else {
        setError(data?.message || "Signup failed");
      }
    } catch (err) {
      setError("Server not responding or invalid JSON");
    }
  };

  return (
    <div className="signup-page">
      <div className="signup-box">
        <h2 className="title">Sign Up</h2>
        <form onSubmit={handleSignup}>
          <input
            type="text"
            placeholder="Username"
            className="input-field"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            className="input-field"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="input-field"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className="signup-button">
            Sign Up
          </button>
        </form>
        {error && <p className="error-msg">{error}</p>}
        <div className="extra-links">
          <a href="/login">Already have an account? Log In</a>
        </div>
      </div>
    </div>
  );
};

export default Signup;
