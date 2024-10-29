import React, { useContext, useState } from "react";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { nanoid } from "nanoid";
import { uploadImageToCloudinary } from "../utility/Uploadimage";
import { PropertyContext } from "../context/PropertyContext";

const AddPropertyForm = () => {
  const { addProperty } = useContext(PropertyContext);
  console.log("addProperty ", addProperty);
  const [property, setProperty] = useState({
    id: nanoid(),
    title: "",
    location: "",
    description: "",
    image: null,
    bedrooms: "",
    bathrooms: "",
    price: 0,
    area: "",
  });
  const [errors, setErrors] = useState({});
  const handleChange = (event) => {
    const { name, value } = event.target;

    setProperty((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setProperty((prevState) => ({
      ...prevState,
      image: file,
    }));
  };

  const validateInput = () => {
    const newErrors = {};
    if (!property.title.trim()) newErrors.title = "Title is required";
    if (property.title.length < 2)
      newErrors.title = "Title should be at least 2 characters long";
    if (!property.location.trim()) newErrors.location = "Location is required";
    if (property.description.length < 10)
      newErrors.description =
        "Description should be at least 10 characters long";

    // Validate numerical inputs
    if (!property.price || parseFloat(property.price) < 0)
      newErrors.price = "Price must be a positive number or zero";

    if (!property.bedrooms || parseInt(property.bedrooms, 10) < 0)
      newErrors.bedrooms = "Bedrooms cannot be a negative number";

    if (!property.bathrooms || parseInt(property.bathrooms, 10) < 0)
      newErrors.bathrooms = "Bathrooms cannot be a negative number";

    if (!property.area || parseFloat(property.area) < 0)
      newErrors.area = "Area cannot be a negative number";

    if (!property.image) newErrors.image = "Please provide an image";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    let imageUrl = "";
    if (property.image) {
      imageUrl = await uploadImageToCloudinary(property.image);
    }

    const newProperty = {
      id: nanoid(),
      title: property.title,
      location: property.location,
      description: property.description,
      image: imageUrl,
      price: parseFloat(property.price),
      bedrooms: parseInt(property.bedrooms, 10),
      bathrooms: parseInt(property.bathrooms, 10),
      area: parseFloat(property.area),
    };

    console.log("new property in form ", newProperty);
    addProperty(newProperty);

    // toast.success("Property added successfully!");

    // Reset the form
    setProperty({
      id: nanoid(),
      title: "",
      location: "",
      description: "",
      image: null,
      bedrooms: "",
      bathrooms: "",
      price: 0,
      area: "",
    });
  };
  // Object.values(errors).forEach((error) => {
  //   toast.error(error);
  // });
  // console.log(errors);

  const notify = () => {
    toast.success("Property added successfully!");
  };
  return (
    <div>
      <h2>Add Property</h2>
      <form onSubmit={handleSubmit}>
        {" "}
        <label htmlFor="title">Title:</label>{" "}
        <input
          type="text"
          id="title"
          name="title"
          value={property.title}
          onChange={handleChange}
          required
        />
        <div>{errors.title && <span>{errors.title}</span>}</div>
        <label htmlFor="location">Location:</label>
        <input
          type="text"
          id="location"
          name="location"
          value={property.location}
          onChange={handleChange}
          required
        />
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          name="description"
          value={property.description}
          onChange={handleChange}
          required
        />
        <div>{errors.description && <span>{errors.description}</span>}</div>
        <label htmlFor="image">Image:</label>
        <input
          type="file"
          id="image"
          name="image"
          onChange={handleImageChange}
          required
          accept="image/*"
        />
        {property.image && (
          <div>
            <img
              src={URL.createObjectURL(property.image)}
              alt="Selected Preview"
              style={{ maxWidth: "100%", height: "auto", marginTop: "10px" }}
            />
          </div>
        )}
        <label htmlFor="bedrooms">Bedrooms:</label>
        <input
          type="number"
          id="bedrooms"
          name="bedrooms"
          value={property.bedrooms}
          onChange={handleChange}
          required
        />
        <div>{errors.bedrooms && <span>{errors.bedrooms}</span>}</div>
        <label htmlFor="bathrooms">Bathrooms:</label>
        <input
          type="number"
          id="bathrooms"
          name="bathrooms"
          value={property.bathrooms}
          onChange={handleChange}
          required
        />
        <div>{errors.bathrooms && <span>{errors.bathrooms}</span>}</div>
        <label htmlFor="price">Price:</label>
        <input
          type="number"
          id="price"
          name="price"
          value={property.price}
          onChange={handleChange}
          required
          min="0"
          step="0.01"
        />
        <div>{errors.price && <span>{errors.price}</span>}</div>
        <label htmlFor="area">Area (in sq. ft.):</label>
        <input
          type="number"
          id="area"
          name="area"
          value={property.area}
          onChange={handleChange}
          required
        />
        <div>{errors.area && <span>{errors.area}</span>}</div>
        <div>
          <button className="add-property-form" type="submit" onClick={notify}>
            Add Property
          </button>
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
      </form>
    </div>
  );
};

export default AddPropertyForm;
