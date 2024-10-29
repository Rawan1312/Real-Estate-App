import React from "react";
const PropertyPrice = ({ price }) => {
  const formattedPrice = () => {
    const data = parseFloat(price);
    if (!isNaN(data)) {
      return `$${data.toLocaleString()}`;
    }
    return `$${price}`;
  };

  return <div>{formattedPrice()}</div>;
};

export default PropertyPrice;
