// import React from "react";

// import "../index.css";

// const Footer = () => {
//   const currentYear = new Date().getFullYear();
//   return (
//     <footer className="footer">
//       <p>&copy; {currentYear} Real Estate App. All rights reserved.</p>
//     </footer>
//   );
// };

// export default Footer;
import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer
      style={{
        textAlign: "center",
        padding: "1rem",
        backgroundColor: "#f1f1f1",
        position: "fixed",
        bottom: 0,
        width: "100%",
        left: 0,
        boxShadow: "0 -1px 5px rgba(0, 0, 0, 0.1)",
      }}
    >
      <p>&copy; {currentYear} Real Estate App. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
