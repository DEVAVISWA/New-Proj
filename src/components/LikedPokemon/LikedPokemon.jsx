import axios from "axios";
import React, { useEffect, useState } from "react";

export default function LikedPokemon() {
  const [likedPokemonID, setLikedPokemonID] = useState(0);
  const [likedPokemonData, setLikedPokemonData] = useState(null);
  useEffect(() => {
    const likedPokemonID = window.localStorage.getItem("pokemon-id");
    if (likedPokemonID) {
      setLikedPokemonID(likedPokemonID);
    }
  }, []);

  useEffect(() => {
    const fetchLikedPokemon = async () => {
      try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/1`);
        setLikedPokemonData(response.data);
      } catch (error) {
        console.error("err fetching ID", error);
      }
    };
    fetchLikedPokemon();
  }, []);

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
        {likedPokemonData && (
          <>
            <img
              src={likedPokemonData.sprites.other.dream_world.front_default}
              alt=""
            />
            <h4>{likedPokemonData.name.toUpperCase()}</h4>
          </>
        )}
      </div>
    </div>
  );
}
