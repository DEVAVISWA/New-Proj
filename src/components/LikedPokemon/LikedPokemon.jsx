import React from "react";
import "./LikedPokemon.css";

export default function LikedPokemon() {
  const likedPokemonJSON = JSON.parse(localStorage.getItem(`liked-pokemon`));
  // console.log(likedPokemonJSON);

  return (
    <div className="background liked-poke-bg">
      <img
        src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png"
        alt="Poke API img"
        className="api-png"
      />
      {likedPokemonJSON ? (
        likedPokemonJSON.map((val) => (
          <div className="poke-card" key={val.id}>
            <img
              src={val.sprites.other.dream_world.front_default}
              className="poke-image"
            />
            <h4 className="text-center">{val.name.toUpperCase()}</h4>
          </div>
        ))
      ) : (
        <h1>No Liked Pokémon</h1>
      )}
    </div>
  );
}
