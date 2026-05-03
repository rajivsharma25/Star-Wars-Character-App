import React from "react";
import speciesColors from "../utils/speciesColors";
import { Star, Rocket } from "lucide-react";

function CharacterCard({ character, onClick }) {
  // Generate unique image URL seed based on character name
  const imgUrl = `https://picsum.photos/seed/${encodeURIComponent(character.name)}/1200/1600`;

  // Determine card color by species or fallback default style
  const cardColor =
    speciesColors[character.species?.[0]] ||
    "bg-blue-800/30 backdrop-blur-md backdrop-saturate-150 border border-white/10";

  return (
    <div
      className={`group relative rounded-2xl shadow-lg p-4 text-center cursor-pointer w-full ${cardColor} transform transition-transform duration-300 hover:-translate-y-1`}
      onClick={onClick}
    >
      {/* Hover decorative star and rocket icons container */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-2xl">
        <Star
          size={16}
          className="
            absolute top-4 left-2 text-yellow-500 
            opacity-0 group-hover:opacity-60 
            animate-pulse transition-opacity duration-300
          "
        />
        <Star
          size={20}
          className="
            absolute top-12 right-2 text-yellow-300 
            opacity-0 group-hover:opacity-50 
            animate-pulse transition-opacity duration-500
          "
        />
        <Rocket
          size={24}
          className="
            absolute bottom-4 right-6 text-sky-400 
            opacity-0 group-hover:opacity-20 
            animate-bounce transition-opacity duration-400
          "
        />
        <Rocket
          size={18}
          className="
            absolute bottom-12 left-2 text-gray-500 
            opacity-0 group-hover:opacity-10 
            animate-bounce transition-opacity duration-500
          "
        />
      </div>

      {/* Character image */}
      <div className="overflow-hidden rounded-2xl mb-3 relative z-10">
        <img
          src={imgUrl}
          alt={character.name}
          className="w-full h-56 object-cover"
          loading="lazy"
        />
      </div>

      {/* Character name */}
      <h2 className="relative text-xl font-bold text-white z-10">
        {character.name}
      </h2>
    </div>
  );
}

export default CharacterCard;
