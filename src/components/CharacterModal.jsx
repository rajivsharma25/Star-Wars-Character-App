import React, { useEffect, useState } from "react";
import {
  Ruler,
  Activity,
  Calendar,
  Film,
  Star,
  Globe,
  Thermometer,
  Users,
  X,
} from "lucide-react";
import formatDate from "../utils/formatDate";
import speciesColors from "../utils/speciesColors";

function CharacterModal({ character, onClose }) {
  // State for fetched homeworld data
  const [homeworld, setHomeworld] = useState({});
  // State for fetched species name
  const [speciesName, setSpeciesName] = useState("Loading...");

  // Fetch homeworld on character.homeworld change
  useEffect(() => {
    fetch(character.homeworld)
      .then((res) => res.json())
      .then(setHomeworld);
  }, [character.homeworld]);

  // Fetch species name on character.species change
  useEffect(() => {
    if (character.species?.length) {
      fetch(character.species[0])
        .then((res) => res.json())
        .then((data) => setSpeciesName(data.name))
        .catch(() => setSpeciesName("Unidentified"));
    } else {
      setSpeciesName("Unidentified");
    }
  }, [character.species]);

  // Get species-based glossy background or default
  const cardColor =
    speciesColors[character.species?.[0]] ||
    "bg-blue-700/30 backdrop-blur-md backdrop-saturate-150 border border-white/10";

  // Dynamic image URL from Picsum based on name
  const imgUrl = `https://picsum.photos/seed/${encodeURIComponent(
    character.name
  )}/1200/1600`;

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-xs flex items-center justify-center z-50 p-4">
      <div
        className={`rounded-2xl p-6 shadow-xl max-w-3xl w-full relative flex flex-col md:flex-row gap-4 text-white overflow-auto max-h-[90vh] md:max-h-[70vh] ${cardColor}`}
      >
        {/* Close button with rotation on hover */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-1.5 right-1.5 md:top-4 md:right-4 text-white hover:text-gray-200 transition cursor-pointer hover:rotate-90 duration-300"
        >
          <X size={24} />
        </button>

        {/* Left: character image */}
        <div className="shrink-0 w-full md:w-1/2 h-80 md:h-auto rounded-2xl overflow-hidden">
          <img
            src={imgUrl}
            alt={character.name}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>

        {/* Right: character details */}
        <div className="flex flex-col justify-center space-y-3 md:space-y-4 grow px-2 md:px-4">
          <h2 className="text-3xl md:text-4xl font-bold">{character.name}</h2>
          <p className="text-lg font-semibold">
            <span className="mr-2">Species:</span>
            <span>{speciesName}</span>
          </p>
          <ul className="space-y-2 text-lg">
            <li className="flex items-center gap-2">
              <Ruler className="w-5 h-5" />
              <strong>Height:</strong> {Number(character.height) / 100} m
            </li>
            <li className="flex items-center gap-2">
              <Activity className="w-5 h-5" />
              <strong>Mass:</strong> {character.mass} kg
            </li>
            <li className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              <strong>Date Added:</strong> {formatDate(character.created)}
            </li>
            <li className="flex items-center gap-2">
              <Film className="w-5 h-5" />
              <strong>Films:</strong> {character.films.length}
            </li>
            <li className="flex items-center gap-2">
              <Star className="w-5 h-5" />
              <strong>Birth Year:</strong> {character.birth_year}
            </li>
            <li className="flex items-center gap-2">
              <Globe className="w-5 h-5" />
              <strong>Homeworld:</strong> {homeworld.name || "Loading..."}
            </li>
            <li className="flex items-center gap-2">
              <Thermometer className="w-5 h-5" />
              <strong>Terrain:</strong> {homeworld.terrain || "Loading..."}
            </li>
            <li className="flex items-center gap-2">
              <Thermometer className="w-5 h-5" />
              <strong>Climate:</strong> {homeworld.climate || "Loading..."}
            </li>
            <li className="flex items-center gap-2">
              <Users className="w-5 h-5" />
              <strong>Population:</strong> {homeworld.population || "Loading..."}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CharacterModal;
