import axios from "axios";
import React, { useEffect, useState } from "react";

export default function LikedPokemon() {
  
  const [likedPokemon, setLikedPokemon] = useState(null);

  // useEffect((id) => {
    const likedPokemonJSON= JSON.parse(window.localStorage.getItem(`pokemon-`));
    console.log(likedPokemonJSON)
    if (likedPokemon) {
      setLikedPokemon(likedPokemon);
    }
  // }, []);

  // useEffect(() => {
  //   const fetchLikedPokemon = async () => {
  //     try {
  //       const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/1`);
  //       setLikedPokemonData(response.data);
  //     } catch (error) {
  //       console.error("err fetching ID", error);
  //     }
  //   };
  //   fetchLikedPokemon();
  // }, []);

  return (
    <div className="background">
      <img
        src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png"
        alt="Poke API img"
        className="api-png"
      />
      <div className="poke-card">
        {/* <div className="">
          img
        </div>
        <div className="">
          name
        </div> */}
        {likedPokemon && (
          <>
            <img
              src={likedPokemon.sprites.other.dream_world.front_default}
              alt=""
            />
            <h4>{likedPokemon.name.toUpperCase()}</h4>
          </>
        )}
      </div>
    </div>
  );
}
