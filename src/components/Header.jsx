import React from "react";

function Header({ isDarkMode, toggleDarkMode }) {
  const headerStyle = {
    backgroundColor: isDarkMode ? "#1a202c" : "#cbd5e0",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)", // Added subtle shadow
  };

  const titleStyle = {
    fontSize: "1.875rem", // Equivalent to text-3xl
    fontWeight: "bold",
    color: isDarkMode ? "#fff" : "#1a202c", // Adjusted text color
  };

  const buttonStyle = {
    padding: "0.75rem 1rem",
    borderRadius: "0.375rem", // Rounded-md equivalent
    backgroundColor: isDarkMode ? "#fbbf24" : "#1a202c",
    color: isDarkMode ? "#1a202c" : "#fff",
  };

  return (
    <header style={headerStyle} className="shadow">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <h1 style={titleStyle}>Random Pictures</h1>
        <button onClick={toggleDarkMode} style={buttonStyle}>
          {isDarkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>
    </header>
  );
}

export default Header;
