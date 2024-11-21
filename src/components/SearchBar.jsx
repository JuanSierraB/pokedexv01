
const SearchBar = ({ setSearch }) => {
  const handleInputChange = (event) => {
    setSearch(event.target.value.toLowerCase());
  };

  return (
    <section id="search-section">
      <input
        type="text"
        placeholder="Search Pokémon..."
        onChange={handleInputChange}
        aria-label="Search Pokémon"
      />
    </section>
  );
};

export default SearchBar;
