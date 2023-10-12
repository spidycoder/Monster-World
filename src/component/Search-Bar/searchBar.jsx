import React from "react";
import "./search.css";
export const SearchBar = ({ placeholder, handleChange }) => {
  return (
    <input
      className="search-box"
      type="search"
      placeholder={placeholder}
      onChange={handleChange}
    />
  );
};
