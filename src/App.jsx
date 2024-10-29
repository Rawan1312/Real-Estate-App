import React from "react";
import { PropertyProvider } from "./context/PropertyContext";
import Router from "./routers/Router";
import "../src/index.css";

import { RouterProvider } from "react-router-dom";
import Footer from "./layout/Footer";

const App = () => {
  return (
    <PropertyProvider>
      <RouterProvider router={Router} />
      <Footer/>
    </PropertyProvider>
  );
};

export default App;
