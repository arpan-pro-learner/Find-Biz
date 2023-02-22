import React, { useState } from "react";
import Footer from "./components/Footer";
import SearchBar from "./components/SearchBar";
import SearchResults from "./components/SearchResults";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <SearchResults searchTerm={searchTerm} />
      <Footer/>
    </div>
  );
}

export default App;
