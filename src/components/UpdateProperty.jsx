// import React, { useState } from "react";

// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { uploadImageToCloudinary } from "../utility/Uploadimage";

// const UpdateProperty = ({ propertyToUpdate, UpdateProperty, onClose }) => {
//   const [property, setProperty] = useState({
//     id: propertyToUpdate?.id || "",
//     title: propertyToUpdate?.title || "",
//     location: propertyToUpdate?.location || "",
//     description: propertyToUpdate?.description || "",
//     image: null,
//     bedrooms: propertyToUpdate?.bedrooms || 0,
//     bathrooms: propertyToUpdate?.bathrooms || 0,
//     price: propertyToUpdate?.price || 0,
//     area: propertyToUpdate?.area || 0,
//   });

//   const handleImageChange = (event) => {
//     const file = event.target.files[0];
//     setProperty((prevState) => ({
//       ...prevState,
//       image: file,
//     }));
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     try {
//       let imageUrl = property.image
//         ? await uploadImageToCloudinary(property.image)
//         : propertyToUpdate.image;
//       const updatedProperty = {
//         ...property,
//         image: imageUrl,
//       };

//       UpdateProperty(updatedProperty);
//       onClose();
//     } catch (error) {
//       toast.error("Failed to update property.");
//       console.error(error);
//     }
//   };

//   return (
//     <div>
//       <h2>Update Property</h2>
//       <form onSubmit={handleSubmit}>
//         <label htmlFor="title">Title:</label>
//         <input
//           type="text"
//           id="title"
//           name="title"
//           value={property.title}
//           onChange={(e) => setProperty({ ...property, title: e.target.value })}
//           required
//         />

//         <label htmlFor="location">Location:</label>
//         <input
//           type="text"
//           id="location"
//           name="location"
//           value={property.location}
//           onChange={(e) =>
//             setProperty({ ...property, location: e.target.value })
//           }
//           required
//         />

//         <label htmlFor="description">Description:</label>
//         <textarea
//           id="description"
//           name="description"
//           value={property.description}
//           onChange={(e) =>
//             setProperty({ ...property, description: e.target.value })
//           }
//           required
//         ></textarea>

//         <label htmlFor="bedrooms">Bedrooms:</label>
//         <input
//           type="number"
//           id="bedrooms"
//           name="bedrooms"
//           value={property.bedrooms}
//           onChange={(e) =>
//             setProperty({ ...property, bedrooms: e.target.value })
//           }
//           required
//         />

//         <label htmlFor="bathrooms">Bathrooms:</label>
//         <input
//           type="number"
//           id="bathrooms"
//           name="bathrooms"
//           value={property.bathrooms}
//           onChange={(e) =>
//             setProperty({ ...property, bathrooms: e.target.value })
//           }
//           required
//         />

//         <label htmlFor="price">Price:</label>
//         <input
//           type="number"
//           id="price"
//           name="price"
//           value={property.price}
//           onChange={(e) => setProperty({ ...property, price: e.target.value })}
//           required
//         />

//         <label htmlFor="area">Area (sq ft):</label>
//         <input
//           type="number"
//           id="area"
//           name="area"
//           value={property.area}
//           onChange={(e) => setProperty({ ...property, area: e.target.value })}
//           required
//         />

//         <label htmlFor="image">Image:</label>
//         <input
//           type="file"
//           id="image"
//           name="image"
//           onChange={handleImageChange}
//           accept="image/*"
//         />
//         {property.image instanceof File && (
//           <div>
//             <img
//               src={URL.createObjectURL(property.image)}
//               alt="Selected Preview"
//               style={{ maxWidth: "100%", height: "auto", marginTop: "10px" }}
//             />
//           </div>
//         )}
//         {propertyToUpdate.image && !property.image && (
//           <div>
//             <img
//               src={propertyToUpdate.image}
//               alt="Current Property"
//               style={{ maxWidth: "100%", height: "auto", marginTop: "10px" }}
//             />
//           </div>
//         )}

//         <button className="update-property-form" type="submit">
//           Update Property
//         </button>
//         <button type="button" onClick={onClose}>
//           Cancel
//         </button>
//         <ToastContainer
//           position="top-center"
//           autoClose={5000}
//           hideProgressBar={false}
//           newestOnTop={false}
//           closeOnClick
//           rtl={false}
//           pauseOnFocusLoss
//           draggable
//           pauseOnHover
//           theme="light"
//         />
//         <div />
//       </form>
//     </div>
//   );
// };

// export default UpdateProperty;
// import React, { useState } from "react";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { uploadImageToCloudinary } from "../utility/Uploadimage";

// const UpdateProperty = ({ propertyToUpdate, UpdateProperty, onClose }) => {
//   const [property, setProperty] = useState({
//     id: propertyToUpdate?.id || "",
//     title: propertyToUpdate?.title || "",
//     location: propertyToUpdate?.location || "",
//     description: propertyToUpdate?.description || "",
//     image: null,
//     bedrooms: propertyToUpdate?.bedrooms || 0,
//     bathrooms: propertyToUpdate?.bathrooms || 0,
//     price: propertyToUpdate?.price || 0,
//     area: propertyToUpdate?.area || 0,
//   });

//   const handleImageChange = (event) => {
//     const file = event.target.files[0];
//     setProperty((prevState) => ({
//       ...prevState,
//       image: file,
//     }));
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     try {
//       let imageUrl = property.image
//         ? await uploadImageToCloudinary(property.image)
//         : propertyToUpdate.image;

//       const updatedProperty = {
//         ...property,
//         image: imageUrl,
//       };

//       UpdateProperty(updatedProperty);
//       toast.success("Property updated successfully!");
//       onClose();
//     } catch (error) {
//       toast.error("Failed to update property.");
//       console.error(error);
//     }
//   };

//   return (
//     <div>
//       <h2>Update Property</h2>
//       <form onSubmit={handleSubmit}>
//         <label htmlFor="title">Title:</label>
//         <input
//           type="text"
//           id="title"
//           name="title"
//           value={property.title}
//           onChange={(e) => setProperty({ ...property, title: e.target.value })}
//           required
//         />

//         <label htmlFor="location">Location:</label>
//         <input
//           type="text"
//           id="location"
//           name="location"
//           value={property.location}
//           onChange={(e) =>
//             setProperty({ ...property, location: e.target.value })
//           }
//           required
//         />

//         <label htmlFor="description">Description:</label>
//         <textarea
//           id="description"
//           name="description"
//           value={property.description}
//           onChange={(e) =>
//             setProperty({ ...property, description: e.target.value })
//           }
//           required
//         />

//         <label htmlFor="bedrooms">Bedrooms:</label>
//         <input
//           type="number"
//           id="bedrooms"
//           name="bedrooms"
//           value={property.bedrooms}
//           onChange={(e) =>
//             setProperty({ ...property, bedrooms: parseInt(e.target.value) })
//           }
//           required
//         />

//         <label htmlFor="bathrooms">Bathrooms:</label>
//         <input
//           type="number"
//           id="bathrooms"
//           name="bathrooms"
//           value={property.bathrooms}
//           onChange={(e) =>
//             setProperty({ ...property, bathrooms: parseInt(e.target.value) })
//           }
//           required
//         />

//         <label htmlFor="price">Price:</label>
//         <input
//           type="number"
//           id="price"
//           name="price"
//           value={property.price}
//           onChange={(e) =>
//             setProperty({ ...property, price: parseFloat(e.target.value) })
//           }
//           required
//         />

//         <label htmlFor="area">Area (sq ft):</label>
//         <input
//           type="number"
//           id="area"
//           name="area"
//           value={property.area}
//           onChange={(e) =>
//             setProperty({ ...property, area: parseFloat(e.target.value) })
//           }
//           required
//         />

//         <label htmlFor="image">Image:</label>
//         <input
//           type="file"
//           id="image"
//           name="image"
//           onChange={handleImageChange}
//         />

//         <button className="update-property-form" type="submit">
//           Update Property
//         </button>
//         <button type="button" onClick={onClose}>
//           Cancel
//         </button>
//       </form>

//       {/* Add ToastContainer here */}
//       <ToastContainer
//         position="top-center"
//         autoClose={5000}
//         hideProgressBar={false}
//         newestOnTop={false}
//         closeOnClick
//         rtl={false}
//         pauseOnFocusLoss
//         draggable
//         pauseOnHover
//         theme="light"
//       />
//     </div>
//   );
// };

// export default UpdateProperty;
// import React, { useState } from "react";
// import { toast, ToastContainer } from "react-toastify";
// import "../index.css";

// import "react-toastify/dist/ReactToastify.css";
// import { uploadImageToCloudinary } from "../utility/Uploadimage";

// const UpdateProperty = ({ propertyToUpdate, UpdateProperty, onClose }) => {
//   const [property, setProperty] = useState({
//     id: propertyToUpdate?.id || "",
//     title: propertyToUpdate?.title || "",
//     location: propertyToUpdate?.location || "",
//     description: propertyToUpdate?.description || "",
//     image: null,
//     bedrooms: propertyToUpdate?.bedrooms || 0,
//     bathrooms: propertyToUpdate?.bathrooms || 0,
//     price: propertyToUpdate?.price || 0,
//     area: propertyToUpdate?.area || 0,
//   });

//   const handleImageChange = (event) => {
//     const file = event.target.files[0];
//     setProperty((prevState) => ({
//       ...prevState,
//       image: file,
//     }));
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     try {
//       // Upload image if changed, else keep existing image URL
//       let imageUrl = property.image
//         ? await uploadImageToCloudinary(property.image)
//         : propertyToUpdate.image;

//       const updatedProperty = {
//         ...property,
//         image: imageUrl,
//       };

//       // Log to check updated property values before sending to parent
//       console.log("Updated Property:", updatedProperty);

//       // Send updated property to parent component
//       UpdateProperty(updatedProperty);
//       toast.success("Property updated successfully!");

//       // Close the form after successful update
//       onClose();
//     } catch (error) {
//       toast.error("Failed to update property.");
//       console.error("Error updating property:", error);
//     }
//   };

//   return (
//     <div>
//       <h2>Update Property</h2>
//       <form onSubmit={handleSubmit}>
//         <label htmlFor="title">Title:</label>
//         <input
//           type="text"
//           id="title"
//           name="title"
//           value={property.title}
//           onChange={(e) => setProperty({ ...property, title: e.target.value })}
//           required
//         />

//         <label htmlFor="location">Location:</label>
//         <input
//           type="text"
//           id="location"
//           name="location"
//           value={property.location}
//           onChange={(e) =>
//             setProperty({ ...property, location: e.target.value })
//           }
//           required
//         />

//         <label htmlFor="description">Description:</label>
//         <textarea
//           id="description"
//           name="description"
//           value={property.description}
//           onChange={(e) =>
//             setProperty({ ...property, description: e.target.value })
//           }
//           required
//         />

//         <label htmlFor="bedrooms">Bedrooms:</label>
//         <input
//           type="number"
//           id="bedrooms"
//           name="bedrooms"
//           value={property.bedrooms}
//           onChange={(e) =>
//             setProperty({ ...property, bedrooms: parseInt(e.target.value) })
//           }
//           required
//         />

//         <label htmlFor="bathrooms">Bathrooms:</label>
//         <input
//           type="number"
//           id="bathrooms"
//           name="bathrooms"
//           value={property.bathrooms}
//           onChange={(e) =>
//             setProperty({ ...property, bathrooms: parseInt(e.target.value) })
//           }
//           required
//         />

//         <label htmlFor="price">Price:</label>
//         <input
//           type="number"
//           id="price"
//           name="price"
//           value={property.price}
//           onChange={(e) =>
//             setProperty({ ...property, price: parseFloat(e.target.value) })
//           }
//           required
//         />

//         <label htmlFor="area">Area (sq ft):</label>
//         <input
//           type="number"
//           id="area"
//           name="area"
//           value={property.area}
//           onChange={(e) =>
//             setProperty({ ...property, area: parseFloat(e.target.value) })
//           }
//           required
//         />

//         <label htmlFor="image">Image:</label>
//         <input
//           type="file"
//           id="image"
//           name="image"
//           onChange={handleImageChange}
//         />

//         <button className="update-property-form" type="submit">
//           Update Property
//         </button>
//         <button type="button" onClick={onClose}>
//           Cancel
//         </button>
//       </form>

//       <ToastContainer
//         position="top-center"
//         autoClose={5000}
//         hideProgressBar={false}
//         newestOnTop={false}
//         closeOnClick
//         rtl={false}
//         pauseOnFocusLoss
//         draggable
//         pauseOnHover
//         theme="light"
//       />
//     </div>
//   );
// };

// export default UpdateProperty;
import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "../index.css";
import "react-toastify/dist/ReactToastify.css";
import { uploadImageToCloudinary } from "../utility/Uploadimage";

const UpdateProperty = ({ propertyToUpdate, UpdateProperty, onClose }) => {
  const [property, setProperty] = useState({
    id: propertyToUpdate?.id || "",
    title: propertyToUpdate?.title || "",
    location: propertyToUpdate?.location || "",
    description: propertyToUpdate?.description || "",
    image: null,
    bedrooms: propertyToUpdate?.bedrooms || 0,
    bathrooms: propertyToUpdate?.bathrooms || 0,
    price: propertyToUpdate?.price || 0,
    area: propertyToUpdate?.area || 0,
  });

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setProperty((prevState) => ({
      ...prevState,
      image: file,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      let imageUrl = property.image
        ? await uploadImageToCloudinary(property.image)
        : propertyToUpdate.image;

      const updatedProperty = {
        ...property,
        image: imageUrl,
      };

      console.log("Updated Property:", updatedProperty);
      UpdateProperty(updatedProperty);
      toast.success("Property updated successfully!");
      onClose();
    } catch (error) {
      toast.error("Failed to update property.");
      console.error("Error updating property:", error);
    }
  };

  return (
    <div>
      <h2>Update Property</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          name="title"
          value={property.title}
          onChange={(e) => setProperty({ ...property, title: e.target.value })}
          required
        />

        <label htmlFor="location">Location:</label>
        <input
          type="text"
          id="location"
          name="location"
          value={property.location}
          onChange={(e) =>
            setProperty({ ...property, location: e.target.value })
          }
          required
        />

        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          name="description"
          value={property.description}
          onChange={(e) =>
            setProperty({ ...property, description: e.target.value })
          }
          required
        />

        <label htmlFor="bedrooms">Bedrooms:</label>
        <input
          type="number"
          id="bedrooms"
          name="bedrooms"
          value={property.bedrooms}
          onChange={(e) =>
            setProperty({ ...property, bedrooms: parseInt(e.target.value) })
          }
          required
        />

        <label htmlFor="bathrooms">Bathrooms:</label>
        <input
          type="number"
          id="bathrooms"
          name="bathrooms"
          value={property.bathrooms}
          onChange={(e) =>
            setProperty({ ...property, bathrooms: parseInt(e.target.value) })
          }
          required
        />

        <label htmlFor="price">Price:</label>
        <input
          type="number"
          id="price"
          name="price"
          value={property.price}
          onChange={(e) =>
            setProperty({ ...property, price: parseFloat(e.target.value) })
          }
          required
        />

        <label htmlFor="area">Area (sq ft):</label>
        <input
          type="number"
          id="area"
          name="area"
          value={property.area}
          onChange={(e) =>
            setProperty({ ...property, area: parseFloat(e.target.value) })
          }
          required
        />

        <label htmlFor="image">Image:</label>
        <input
          type="file"
          id="image"
          name="image"
          onChange={handleImageChange}
        />

        <button className="update-property-form" type="submit">
          Update Property
        </button>
        <button type="button" onClick={onClose}>
          Cancel
        </button>
      </form>

      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
};

export default UpdateProperty;
