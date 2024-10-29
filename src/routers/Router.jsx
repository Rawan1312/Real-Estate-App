// import { createBrowserRouter } from "react-router-dom";
// import Navbarlayout from "../layout/Navbarlayout";
// import ErrorPage from "../pages/ErrorPage";
// import About from "../pages/About";
// import Home from "../pages/Home";
// import PropertyList from "../pages/PropertyList";
// import SignIn from "../pages/SignIn";
// import ProtectedRouter from "../routers/ProtectedRouter";

// const Router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Navbarlayout />,
//     errorElement: <ErrorPage />,
//     children: [
//       { path: "/", element: <Home /> },
//       { path: "/property-list", element: <PropertyList /> },
//       { path: "/about", element: <About /> },

//       { path: "/signin", element: <SignIn /> },
//       { path: "/dashboard", element: <ProtectedRouter /> },
//       { path: "/signout", element: <Home /> },
//     ],
//   },
// ]);

// export default Router;
import { createBrowserRouter } from "react-router-dom";
import Navbarlayout from "../layout/Navbarlayout";
import ErrorPage from "../pages/ErrorPage";
import About from "../pages/About";
import Home from "../pages/Home";
import PropertyList from "../pages/PropertyList";
import SignIn from "../pages/SignIn";
import Profile from "../pages/Profile"; // Import your Profile component
import ProtectedRouter from "../routers/ProtectedRouter";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Navbarlayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/property-list", element: <PropertyList /> },
      { path: "/about", element: <About /> },
      { path: "/signin", element: <SignIn /> },
      { path: "/dashboard", element: <ProtectedRouter /> },
      { path: "/signout", element: <Home /> },
      { path: "/profile", element: <Profile /> }, // Add the profile route here
    ],
  },
]);

export default Router;
