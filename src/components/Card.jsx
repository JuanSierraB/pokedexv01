import "./Card.css";

const Card = ({ pokemon }) => {
  return (
    <article className="card">
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      <h2>{pokemon.name}</h2>
      <p># {pokemon.id}</p>
    </article>
  );
};

export default Card;
