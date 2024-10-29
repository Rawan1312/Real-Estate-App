// import React, { useContext } from "react";
// import { PropertContext } from "../context/PropertyContext";
// import SingleProperty from "../components/SingleProperty";

// const PropertyList = () => {
//   const { properties } = useContext(PropertContext);

//   return (
//     <div>
//       <h2>Property List Page</h2>
//       <section className="properties">
//         {properties.length > 0 ? (
//           properties.map((property) => (
//             <SingleProperty key={property.id} property={property} />
//           ))
//         ) : (
//           <p>No properties available</p>
//         )}
//       </section>
//     </div>
//   );
// };

// export default PropertyList;
// import React, { useContext } from "react";
// import "../index.css";

// import { PropertyContext } from "../context/PropertyContext"; // Corrected import
// import SingleProperty from "../components/SingleProperty";

// const PropertyList = () => {
//   const { properties, deleteProperty, updateProperty } =
//     useContext(PropertyContext); // Corrected usage

//   return (
//     <div>
//       <h2>Property List Page</h2>
//       <section className="properties">
//         {properties.length > 0 ? (
//           properties.map((property) => (
//             <SingleProperty
//               key={property.id}
//               property={property}
//               deleteProperty={deleteProperty}
//               updateProperty={updateProperty}
//             />
//           ))
//         ) : (
//           <p>No properties available</p>
//         )}
//       </section>
//     </div>
//   );
// };

// export default PropertyList;
// import React, { useContext } from "react";
// import "../index.css";
// import { PropertyContext } from "../context/PropertyContext"; // Corrected import
// import SingleProperty from "../components/SingleProperty";

// const PropertyList = () => {
//   const { properties, deleteProperty, updateProperty } =
//     useContext(PropertyContext); // Corrected usage

//   return (
//     <div className="container">
//       <h2>Property List Page</h2>
//       <section className="properties">
//         {properties.length > 0 ? (
//           properties.map((property) => (
//             <SingleProperty
//               key={property.id}
//               property={property}
//               deleteProperty={deleteProperty}
//               updateProperty={updateProperty}
//               className="property-item" // Add class for individual property
//             />
//           ))
//         ) : (
//           <p>No properties available</p>
//         )}
//       </section>
//     </div>
//   );
// };

// export default PropertyList;
import React, { useContext, useState } from "react";
import "../index.css";
import { PropertyContext } from "../context/PropertyContext";
import SingleProperty from "../components/SingleProperty";
import UpdateProperty from "../components/UpdateProperty"; // Import UpdateProperty

const PropertyList = () => {
  const { properties, deleteProperty, updateProperty } =
    useContext(PropertyContext);
  const [isEditing, setIsEditing] = useState(false); // State to manage editing
  const [propertyToUpdate, setPropertyToUpdate] = useState(null); // State for the property being updated

  const handleEditClick = (property) => {
    setPropertyToUpdate(property);
    setIsEditing(true); // Open the editing form
  };

  const handleUpdateSubmit = (updatedProperty) => {
    updateProperty(updatedProperty);
    setIsEditing(false); // Close the form after updating
    setPropertyToUpdate(null); // Reset propertyToUpdate
  };

  return (
    <div className="container">
      <h2>Property List Page</h2>
      <section className="properties">
        {properties.length > 0 ? (
          properties.map((property) => (
            <SingleProperty
              key={property.id}
              property={property}
              deleteProperty={deleteProperty}
              onEditClick={() => handleEditClick(property)} // Pass edit click handler
            />
          ))
        ) : (
          <p>No properties available</p>
        )}
      </section>

      {isEditing && propertyToUpdate && (
        <UpdateProperty
          propertyToUpdate={propertyToUpdate}
          UpdateProperty={handleUpdateSubmit}
          onClose={() => {
            setIsEditing(false);
            setPropertyToUpdate(null);
          }}
        />
      )}
    </div>
  );
};

export default PropertyList;
