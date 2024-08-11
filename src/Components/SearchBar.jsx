import React, { useState } from "react";

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState()

  const handleSearchInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(query); 
  };
  return (
    <div className="flex py-6 justify-center items-center mt-5">
      <form onSubmit={handleSubmit} className="flex w-96">
        <input
          type="text"
          value={query}
          placeholder="Search..."
          onChange={handleSearchInputChange}
          className="w-full md:w-1/2 px-4 py-2  rounded-3xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-950 ml-2 text-white rounded-3xl shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Search
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
