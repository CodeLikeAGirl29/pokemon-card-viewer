import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

const App = () => {
  const [pokemons, setPokemons] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [showFavorites, setShowFavorites] = useState(false);

  // Fetch Pokémon data
  useEffect(() => {
    const fetchPokemons = async () => {
      const res = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=150");
      const promises = res.data.results.map(async (pokemon) => {
        const details = await axios.get(pokemon.url);
        const species = await axios.get(details.data.species.url);
        const flavorText = species.data.flavor_text_entries.find(
          (entry) => entry.language.name === "en",
        );

        return {
          id: details.data.id,
          name: details.data.name,
          image: details.data.sprites.front_default,
          type: details.data.types.map((t) => t.type.name).join(", "),
          description: flavorText
            ? flavorText.flavor_text
            : "No description available.",
        };
      });
      const results = await Promise.all(promises);
      setPokemons(results);

      // Load favorites from localStorage
      const savedFavorites =
        JSON.parse(localStorage.getItem("favorites")) || [];
      setFavorites(savedFavorites);
    };

    fetchPokemons();
  }, []);

  // Toggle favorite status for a Pokémon
  const toggleFavorite = (id) => {
    let updatedFavorites;

    if (favorites.includes(id)) {
      updatedFavorites = favorites.filter((favId) => favId !== id);
    } else {
      updatedFavorites = [...favorites, id];
    }

    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  // Filter Pokémon to display
  const displayedPokemons = showFavorites
    ? pokemons.filter((pokemon) => favorites.includes(pokemon.id))
    : pokemons;

  return (
    <div className="app">
      <h1 className="heading">Pokémon Cards</h1>
      <div className="buttons">
        <button
          className="filter-button"
          onClick={() => setShowFavorites((prev) => !prev)}
        >
          {showFavorites ? "Show All" : "View Favorites"}
        </button>
      </div>
      <div className="card-grid">
        {displayedPokemons.map((pokemon) => (
          <div key={pokemon.id} className="pokemon-card">
            <img
              src={pokemon.image}
              alt={pokemon.name}
              className="pokemon-image"
            />
            <h2 className="pokemon-name">{pokemon.name}</h2>
            <p className="pokemon-type">
              <strong>Type:</strong> {pokemon.type}
            </p>
            <p className="pokemon-description">{pokemon.description}</p>
            <button
              className={`favorite-button ${
                favorites.includes(pokemon.id) ? "favorited" : ""
              }`}
              onClick={() => toggleFavorite(pokemon.id)}
            >
              {favorites.includes(pokemon.id) ? "★" : "☆"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
