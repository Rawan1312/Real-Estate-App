// import React from "react";
// import { Link } from "react-router-dom";
// import PropertyImage from "../components/PropertyImage";

// const Property = ({ property, deleteProperty, UpdateProperty }) => {
//   const { id, title, location, image, bedrooms, bathrooms, price, area } =
//     property;

//   return (
//     <div key={id} className="property-card">
//       <PropertyImage src={image} alt={title} className="property-image" />
//       <h3 className="property-title">{title}</h3>
//       <h3 className="property-price">Price: ${price}</h3>
//       <h3 className="property-bedrooms">Bedrooms: {bedrooms}</h3>
//       <h3 className="property-bathrooms">Bathrooms: {bathrooms}</h3>
//       <h3 className="property-location">Location: {location}</h3>
//       <h3 className="property-area">Area: {area} sq ft</h3>
//       <Link to={`/propertydescription/${id}`}>Show more</Link>

//       <button onClick={() => deleteProperty(id)} className="delete-button">
//         Delete
//       </button>
//       <button
//         onClick={() => UpdateProperty(property)}
//         className="update-button"
//       >
//         Edit
//       </button>
//     </div>
//   );
// };

// export default Property;
import React, { useState } from "react";
import UpdateProperty from "./UpdateProperty";

const Property = ({
  property,
  onHandleDeleteProperty,
  onHandleUpdateProperty,
}) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleUpdateSubmit = (updatedProperty) => {
    onHandleUpdateProperty(updatedProperty);
    setIsEditing(false); // Close the form after updating
  };

  return (
    <article className="property">
      <h2>{property.title}</h2>
      <p>{property.location}</p>
      <button onClick={() => onHandleDeleteProperty(property.id)}>
        Delete
      </button>
      <button onClick={handleEditClick}>Edit</button>

      {isEditing && (
        <UpdateProperty
          propertyToUpdate={property}
          UpdateProperty={handleUpdateSubmit}
          onClose={() => setIsEditing(false)}
        />
      )}
    </article>
  );
};

export default Property;
