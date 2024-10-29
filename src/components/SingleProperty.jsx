// import React, { useContext } from "react";

// import PropertyImage from "./PropertyImage";

// const SingleProperty = ({ property, deleteProperty, updateProperty }) => {
//   console.log("deleteProperty ", deleteProperty);

//   console.log("properties ", property);

//   return (
//     <article key={property.id} className="propertys">
//       <PropertyImage image={property.image} title={property.title} />
//       <h2>{property.title}</h2>
//       <h2>{property.location}</h2>
//       <h2>{property.price}</h2>
//       <h2>{property.description}</h2>
//       <h2>{property.bedrooms}</h2>
//       <h2>{property.bathrooms}</h2>
//       <button onClick={() => deleteProperty(property.id)}>Delete</button>
//       <button onClick={() => updateProperty(property.id)}>Edit</button>
//     </article>
//   );
// };
// export default SingleProperty;
// import React, { useState } from "react";
// import "../index.css";

// import UpdateProperty from "./UpdateProperty";
// import PropertyImage from "./PropertyImage";

// const SingleProperty = ({ property, deleteProperty, updateProperty }) => {
//   const [isEditing, setIsEditing] = useState(false);

//   const handleEditClick = () => {
//     setIsEditing(true);
//   };

//   const handleUpdateSubmit = (updatedProperty) => {
//     updateProperty(updatedProperty);
//     setIsEditing(false); // Close the form after updating
//   };

//   return (
//     <article key={property.id} className="propertys">
//       <PropertyImage image={property.image} title={property.title} />
//       <h2>{property.title}</h2>
//       <h2>{property.location}</h2>
//       <h2>{property.price}</h2>
//       <h2>{property.description}</h2>
//       <h2>{property.bedrooms}</h2>
//       <h2>{property.bathrooms}</h2>
//       <button onClick={() => deleteProperty(property.id)}>Delete</button>
//       <button onClick={handleEditClick}>Edit</button>

//       {isEditing && (
//         <UpdateProperty
//           propertyToUpdate={property}
//           UpdateProperty={handleUpdateSubmit}
//           onClose={() => setIsEditing(false)}
//         />
//       )}
//     </article>
//   );
// };

// export default SingleProperty;
import React from "react";
import "../index.css";
import PropertyImage from "./PropertyImage";

const SingleProperty = ({ property, deleteProperty, onEditClick }) => {
  return (
    <article key={property.id} className="propertys">
      <PropertyImage image={property.image} title={property.title} />
      <h2>{property.title}</h2>
      <h2>{property.location}</h2>
      <h2>{property.price}</h2>
      <h2>{property.description}</h2>
      <h2>{property.bedrooms}</h2>
      <h2>{property.bathrooms}</h2>
      <button onClick={() => deleteProperty(property.id)}>Delete</button>
      <button onClick={onEditClick}>Edit</button> {/* Call the edit handler */}
    </article>
    
  );
};

export default SingleProperty;
