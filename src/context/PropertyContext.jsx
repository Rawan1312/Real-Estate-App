// import { createContext, useState } from "react";
// import { propertysData } from "../Data/data.js";

// export const PropertContext = createContext({});

// export const PropertyProvider = ({ children }) => {
//   const [properties, setProperties] = useState(propertysData);

//   return (
//     <PropertContext.Provider value={{ properties, setProperties }}>
//       {children}
//     </PropertContext.Provider>
//   );
// };
// import { createContext, useState } from "react";
// import { propertysData } from "../Data/data.js";
// import AddProperty from "../components/AddProperty.jsx";

// export const PropertContext = createContext();

// export const PropertyProvider = ({ children }) => {
//   const [properties, setProperties] = useState(propertysData);

//   return (
//     <PropertContext.Provider
//       value={{
//         properties,
//         setProperties,
//         AddProperty,
//       }}
//     >
//       {children}
//     </PropertContext.Provider>
//   );
// };
// import React, { createContext, useState } from "react";
// import { propertysData } from "../Data/data.js";

// export const PropertContext = createContext();

// export const PropertyProvider = ({ children }) => {
//   const [properties, setProperties] = useState(propertysData);

//   const addProperty = (newProperty) => {
//     setProperties((prevProperties) => [...prevProperties, newProperty]);
//   };

//   const deleteProperty = (id) => {
//     setProperties((prevProperties) =>
//       prevProperties.filter((property) => property.id !== id)
//     );
//   };

//   const updateProperty = (updatedProperty) => {
//     setProperties((prevProperties) =>
//       prevProperties.map((property) =>
//         property.id === updatedProperty.id ? updatedProperty : property
//       )
//     );
//   };

//   return (
//     <PropertContext.Provider
//       value={{
//         properties,
//         addProperty,
//         deleteProperty,
//         updateProperty,
//       }}
//     >
//       {children}
//     </PropertContext.Provider>
//   );
// };
// export default PropertContext;
// PropertyContext.js
// import React, { createContext, useState } from "react";
// import { propertysData } from "../Data/data.js";
// import "../index.css";

// export const PropertyContext = createContext();

// export const PropertyProvider = ({ children }) => {
//   const [properties, setProperties] = useState(propertysData);

//   const addProperty = (newProperty) => {
//     setProperties((prevProperties) => [...prevProperties, newProperty]);
//   };

//   const deleteProperty = (id) => {
//     console.log("receive id ", id);
//     setProperties((prevProperties) =>
//       prevProperties.filter((property) => property.id !== id)
//     );
//   };

//   const updateProperty = (updatedProperty) => {
//     setProperties((prevProperties) =>
//       prevProperties.map((property) =>
//         property.id === updatedProperty.id ? updatedProperty : property
//       )
//     );
//   };

//   return (
//     <PropertyContext.Provider
//       value={{
//         properties,
//         addProperty,
//         deleteProperty,
//         updateProperty,
//       }}
//     >
//       {children}
//     </PropertyContext.Provider>
//   );
// };
import React, { createContext, useState } from "react";
import { propertysData } from "../Data/data.js";
import "../index.css";

export const PropertyContext = createContext();

export const PropertyProvider = ({ children }) => {
  const [properties, setProperties] = useState(propertysData);

  const addProperty = (newProperty) => {
    setProperties((prevProperties) => [...prevProperties, newProperty]);
  };

  const deleteProperty = (id) => {
    console.log("receive id ", id);
    setProperties((prevProperties) =>
      prevProperties.filter((property) => property.id !== id)
    );
  };

  const updateProperty = (updatedProperty) => {
    setProperties((prevProperties) =>
      prevProperties.map((property) =>
        property.id === updatedProperty.id ? updatedProperty : property
      )
    );
  };

  return (
    <PropertyContext.Provider
      value={{
        properties,
        addProperty,
        deleteProperty,
        updateProperty,
      }}
    >
      {children}
    </PropertyContext.Provider>
  );
};
