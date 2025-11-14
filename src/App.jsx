import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CharacterList from "./components/CharacterList";
import CharacterModal from "./components/CharacterModal";
import "./index.css";

function App() {
  // State to hold selected character for modal
  const [selected, setSelected] = useState(null);

  return (
    <div className="min-h-screen text-white flex flex-col bg-[url('/background.jpg')] bg-cover bg-center bg-no-repeat">
      <Header />

      <div className="pt-24 flex-1">
        <h1 className="text-4xl font-extrabold text-center py-4 uppercase">
          Explore Star Wars Legends
        </h1>

        <p className="text-center text-gray-200/80 max-w-2xl mx-auto mb-6 px-4">
          Explore the vast galaxy and discover characters from all species. 
          Click any character card to view detailed information about their origins, traits, and appearances.
        </p>

        {/* Character list with selection handler */}
        <CharacterList onSelect={setSelected} />

        {/* Show character detail modal on selection */}
        {selected && (
          <CharacterModal
            character={selected}
            onClose={() => setSelected(null)}
          />
        )}
      </div>

      <Footer />
    </div>
  );
}

export default App;
