import React, { useContext } from "react";
import { PropertContext } from "../context/PropertyContext";
import Property from "./Property";

// const Propertys = () => {
//   const { properties, deleteProperty, updateProperty } =
//     useContext(PropertContext);

//   return (
//     <div>
//       {properties.map((property) => (
//         <Property
//           key={property.id}
//           property={property}
//           onHandleDeleteProperty={deleteProperty}
//           onHandleUpdateProperty={UpdateProperty}
//         />
//       ))}
//     </div>
//   );
// };

// export default Propertys;
const Propertys = () => {
  const { properties, deleteProperty, updateProperty } =
    useContext(PropertContext);
return(
  <div className="properties">
    {properties.map((property) => (
      <div className="property-item" key={property.id}>
        <img src={property.imageUrl} alt={property.title} />
        <h2>{property.title}</h2>
        <p>{property.location}</p>
        <p>{property.price}</p>
        <button onClick={() => deleteProperty(property.id)}>Delete</button>
        <button onClick={() => handleEditClick(property)}>Edit</button>
      </div>
    ))}
  </div>;
)};
export default Propertys;
