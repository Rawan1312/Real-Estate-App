// import React, { useState } from "react";
// import "../index.css";

// import { useNavigate } from "react-router-dom";

// const SignIn = () => {
//   const navigate = useNavigate();
//   const [user, setUser] = useState({
//     email: "",
//     password: "",
//   });

//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setUser((prevUser) => ({ ...prevUser, [name]: value }));
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     const newuser = {
//       id: Date.now().toString(),
//       email: user.email,
//       password: user.email,
//     };
//     const userData = {
//       id: Date.now().toString(),
//       name: "Rawan Ali",
//       email: "rraawa.12@gmail.com",
//       password: "1233567",
//       address: "KSA",
//       isAdmin: true,
//     };

//     if (user.email === userData.email && user.password === userData.password) {
//       console.log("Successfully signed in");
//       navigate("/profile", { state: userData });
//       localStorage.setItem("signIn", JSON.stringify(userData));
//       navigate("/profile", { state: userData });
//     } else {
//       navigate("/signin");
//     }
//     console.log(newuser);
//   };

//   return (
//     <div>
//       <h3> Sign In</h3>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label htmlFor="email">Email:</label>
//           <input
//             type="text"
//             id="email"
//             name="email"
//             value={user.email}
//             onChange={handleChange}
//           />
//         </div>
//         <div>
//           <label htmlFor="password">Password:</label>
//           <input
//             type="password"
//             id="password"
//             name="password"
//             value={user.password}
//             onChange={handleChange}
//           />
//         </div>
//         <button type="submit">Sign In</button>
//       </form>
//     </div>
//   );
// };

// export default SignIn;
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "../index.css";

// const SignIn = () => {
//   const navigate = useNavigate();
//   const [user, setUser] = useState({
//     email: "",
//     password: "",
//   });
//   const [error, setError] = useState(""); // State for error message

//   // Mock user data (Replace with API call in real app)
//   const userData = {
//     id: "1",
//     name: "Rawan Ali",
//     email: "rraawa.12@gmail.com",
//     password: "1233567",
//     address: "KSA",
//     isAdmin: true,
//   };

//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setUser((prevUser) => ({ ...prevUser, [name]: value }));
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     // Check if the provided email and password match
//     if (user.email === userData.email && user.password === userData.password) {
//       console.log("Successfully signed in");
//       navigate("/profile", { state: userData });
//       localStorage.setItem("signIn", JSON.stringify(userData));
//     } else {
//       setError("Invalid email or password."); // Set error message
//       console.log("Sign-in failed");
//     }
//   };

//   return (
//     <div>
//       <h3> Sign In</h3>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label htmlFor="email">Email:</label>
//           <input
//             type="text"
//             id="email"
//             name="email"
//             value={user.email}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div>
//           <label htmlFor="password">Password:</label>
//           <input
//             type="password"
//             id="password"
//             name="password"
//             value={user.password}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         {error && <p style={{ color: "red" }}>{error}</p>}{" "}
//         {/* Display error message */}
//         <button type="submit">Sign In</button>
//       </form>
//     </div>
//   );
// };

// export default SignIn;
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../index.css";

const SignIn = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState(""); // State for error message

  // Mock user data (Replace with API call in real app)
  const userData = {
    id: "1",
    name: "Rawan Ali",
    email: "rraawa.12@gmail.com",
    password: "1233567",
    address: "KSA",
    isAdmin: true,
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Check if the provided email and password match
    if (user.email === userData.email && user.password === userData.password) {
      console.log("Successfully signed in");
      navigate("/profile", { state: userData });
      localStorage.setItem("signIn", JSON.stringify(userData));
    } else {
      setError("Invalid email or password."); // Set error message
      console.log("Sign-in failed");
    }
  };

  return (
    <div className="container">
      <h3>Sign In</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            id="email"
            name="email"
            value={user.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={user.password}
            onChange={handleChange}
            required
          />
        </div>
        {error && <p className="error">{error}</p>}{" "}
        {/* Display error message */}
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};

export default SignIn;
