import { useState, useEffect } from "react";
import Card from "./components/Card";
import SearchBar from "./components/SearchBar";
import "./styles/App.css";
import "./index.css";

const App = () => {
  const [pokemons, setPokemons] = useState([]);
  const [filteredPokemons, setFilteredPokemons] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    // Rescatar informacion del Pokemon
    const fetchPokemons = async () => {
      const response = await fetch(
        "https://pokeapi.co/api/v2/pokemon?limit=151"
      );
      const data = await response.json();
      const detailedPokemons = await Promise.all(
        data.results.map((pokemon) =>
          fetch(pokemon.url).then((res) => res.json())
        )
      );
      setPokemons(detailedPokemons);
      setFilteredPokemons(detailedPokemons);
    };

    fetchPokemons();
  }, []);

  // Filtro de busqueda
  useEffect(() => {
    setFilteredPokemons(
      pokemons.filter(
        (pokemon) =>
          pokemon.name.includes(search) ||
          pokemon.id.toString().includes(search)
      )
    );
  }, [search, pokemons]);

  return (
    <div className="App">
      <header>
        <h1> Pokedex </h1>
      </header>
      <SearchBar setSearch={setSearch} />
      <main>
        <section className="pokemon-grid">
          {filteredPokemons.map((pokemon) => (
            <Card
              key={pokemon.id}
              pokemon={pokemon}
              image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
                pokemon + 1
              }.png`}
              number={pokemon + 1}
            />
          ))}
        </section>
      </main>
      <footer>
        <p> Pokedex Chile 2024</p>
      </footer>
    </div>
  );
};

export default App;
