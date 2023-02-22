import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useDebounce } from "use-debounce";
import "tailwindcss/tailwind.css";

function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearchTerm] = useDebounce(searchTerm, 500);

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    if (!searchTerm) {
      alert("Please enter something to search for");
    } else {
      onSearch(debouncedSearchTerm);
    }
  };

  return (
    <div className="flex flex-col justify-center mb-8">
      <div className="flex items-center justify-between px-8 py-4 sm:py-8 md:px-16 lg:px-24 xl:px-32">
        <div className="text-xl font-bold">Findbiz 🛒</div>
        <div className="flex items-center bg-gray-100 rounded-md px-4 py-2">
          <input
            className="bg-gray-100 focus:outline-none w-64 sm:w-96 md:w-128 lg:w-160 xl:w-192"
            type="text"
            onChange={handleInputChange}
            placeholder="Search for local businesses..."
          />
          <button type="button" onClick={handleSearch}>
            <FaSearch className="ml-2 text-gray-500" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
