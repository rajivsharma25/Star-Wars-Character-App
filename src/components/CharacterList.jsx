import React, { useState, useMemo } from "react";
import useSwapiPeople from "../hooks/useSwapiPeople";
import CharacterCard from "./CharacterCard";
import Pagination from "./Pagination";
import { ThreeDots } from "react-loader-spinner";

function CharacterList({ onSelect }) {
  // Current page number state
  const [page, setPage] = useState(1);
  // Search input state
  const [searchTerm, setSearchTerm] = useState("");
  // Fetch SWAPI people data for current page
  const { data, loading, error } = useSwapiPeople(page);

  // Filter characters by name search term (case-insensitive)
  const filteredResults = useMemo(() => {
    if (!searchTerm) return data.results;
    return data.results.filter((c) =>
      c.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [data.results, searchTerm]);

  // Loading state
  if (loading)
    return (
      <div className="fixed inset-0 flex justify-center items-center bg-black/50 backdrop-blur-sm">
        <ThreeDots
          height="80"
          width="80"
          radius="9"
          color="#90cdf4"
          ariaLabel="three-dots-loading"
          visible={true}
        />
      </div>
    );

  // Error state
  if (error)
    return (
      <div className="fixed inset-0 flex flex-col justify-center items-center bg-black/50 backdrop-blur-sm">
        <ThreeDots
          height="80"
          width="80"
          radius="9"
          color="#f56565"
          ariaLabel="error-loading"
          visible={true}
        />
        <p className="mt-4 text-red-400 font-semibold">
          Error loading data. Please try again.
        </p>
      </div>
    );

  return (
    <>
      {/* Search input field */}
      <div className="max-w-7xl mx-auto text-center px-4 mb-8">
        <input
          type="text"
          placeholder="Search Star Wars characters..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full max-w-lg px-4 py-2.5 rounded-full bg-gray-800/40 backdrop-blur-xs border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500"
        />
      </div>

      {/* Character cards grid */}
      <div className="max-w-7xl mx-auto px-4 mb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-center">
          {filteredResults.length > 0 ? (
            filteredResults.map((c) => (
              <CharacterCard
                key={c.url}
                character={c}
                onClick={() => onSelect(c)}
              />
            ))
          ) : (
            <p className="text-center text-gray-100 col-span-full mt-12 text-2xl font-semibold italic">
              No characters found.
            </p>
          )}
        </div>
      </div>

      {/* Pagination controls */}
      <Pagination
        page={page}
        setPage={setPage}
        next={!!data.next}
        prev={!!data.previous}
      />
    </>
  );
}

export default CharacterList;
