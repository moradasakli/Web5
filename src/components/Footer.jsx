import React from "react";

function Footer({ isDarkMode }) {
  const footerStyle = {
    backgroundColor: isDarkMode ? "#1a202c" : "#000",
    boxShadow: "0 -2px 4px rgba(0, 0, 0, 0.1)", // Added subtle shadow
  };

  const textStyle = {
    color: "#fff",
  };

  return (
    <footer style={footerStyle} className="mt-auto">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <p className="text-center" style={textStyle}>
          &copy; Morad,Shadi,Aneel,Raeed 2024
        </p>
      </div>
    </footer>
  );
}

export default Footer;
