import React, { useEffect, useState } from "react";

function SearchResults({ searchTerm }) {
  const [results, setResults] = useState([]);

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": import.meta.env.VITE_API_KEY,
        "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
      },
    };

    if (searchTerm) {
      fetch(
        `https://travel-advisor.p.rapidapi.com/locations/search?query=${searchTerm}&limit=3&offset=0&units=km&location_id=1&currency=USD&sort=relevance&lang=en_US`,
        options
      )
        .then((response) => response.json())
        .then((response) => {
          setResults(response.data);
        })
        .catch((err) => console.error(err));
    }
  }, [searchTerm]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
      {results.map((result) => (
        <div
          key={result.result_object.location_id}
          className="bg-white rounded-lg shadow-md"
        >
          <img
            src={result.result_object.photo.images.small.url}
            alt=""
            className="w-full rounded-t-lg"
          />
          <div className="p-4">
            <h3 className="font-semibold text-lg">
              {result.result_object.name}
            </h3>
            <p className="text-gray-500">
              {result.result_object.location_string}
            </p>
            <p className="text-gray-500">{result.result_object.rating}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default SearchResults;
