// import React from "react";
// import "../index.css";

// import AddPropertyForm from "../components/AddPropertyForm";
// import PropertyList from "./PropertyList";

// const Home = () => {
//   return (
//     <div>
//       <h2>Home page</h2>
//       <AddPropertyForm />
//       <PropertyList />
//     </div>
//   );
// };

// export default Home;
import React from "react";
import "../index.css";
import AddPropertyForm from "../components/AddPropertyForm";
import PropertyList from "./PropertyList";

const Home = () => {
  return (
    <div className="container">
      <h2>Home Page</h2>
      <AddPropertyForm />
      <PropertyList />
    </div>
  );
};

export default Home;
