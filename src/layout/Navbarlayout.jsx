import React from "react";
import { Link, Outlet } from "react-router-dom";
import "../index.css";

const handleSignout = () => {
  localStorage.setItem(
    "signIn",
    JSON.stringify({
      isSignIn: false,
    })
  );
};
const Navbarlayout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/property-List">PropertyList</Link>
          </li>
          <li>
            <Link to="/signin">Sign In</Link>
          </li>
          <li>
            <Link to="/signout" onClick={handleSignout}>
              SignOut
            </Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
};

export default Navbarlayout;
