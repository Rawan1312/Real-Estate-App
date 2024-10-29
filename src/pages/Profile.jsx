// import React from "react";
// import { useLocation } from "react-router-dom";

// const Profile = () => {
//   const location = useLocation();
//   const userData = location.state; // Retrieve the passed state

//   return (
//     <div>
//       <h1>Profile</h1>
//       {userData ? (
//         <div>
//           <p>Name: {userData.name}</p>
//           <p>Email: {userData.email}</p>
//           <p>Address: {userData.address}</p>
//         </div>
//       ) : (
//         <p>No user data available.</p>
//       )}
//     </div>
//   );
// };

// export default Profile;
import React from "react";
import { useLocation } from "react-router-dom";
import "../index.css";

const Profile = () => {
  const location = useLocation();
  const userData = location.state; // Retrieve the passed state

  return (
    <div className="container">
      <h1>Profile</h1>
      {userData ? (
        <div>
          <p>Name: {userData.name}</p>
          <p>Email: {userData.email}</p>
          <p>Address: {userData.address}</p>
        </div>
      ) : (
        <p>No user data available.</p>
      )}
    </div>
  );
};

export default Profile;
