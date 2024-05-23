import React, { useEffect, useState } from "react";
import "./Pokemon.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGratipay } from "@fortawesome/free-brands-svg-icons";
import axios from "axios";
import { faCircleLeft } from "@fortawesome/free-regular-svg-icons";
import { useNavigate } from "react-router-dom";

export default function Pokemon() {
  const navigate = useNavigate();
  const [pokemonData, setPokemonData] = useState(null);

  const [likedPokemon, setLikedPokemon] = useState(1);

  const fetchPokemonData = async () => {
    try {
      let randomId = Math.floor(Math.random() * 1025) + 1;
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${randomId}`
      );
      setPokemonData(response.data);
    } catch (error) {
      console.error("Err fetching Pokemon", error);
    }
  };
  useEffect(() => {
    fetchPokemonData();
  }, [likedPokemon]);

  const navigateBack = () => {
    console.log("button pressed");
    navigate("/");
  };

  const likePokemonList = () => {
    alert("sorry i didn't get enough time to do this feature completely");
    // navigate("/pokemon_liked");
  };

  const nextPokemon = () => {
    fetchPokemonData();
  };

  const dislikePokemon = () => {
    fetchPokemonData();
  };

  const likePokemon = () => {
    setLikedPokemon(likedPokemon)
    window.localStorage.setItem('liked-pokemon', JSON.stringify(pokemonData));
    nextPokemon();
  };

  return (
    <div className="background">
      <img
        src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png"
        alt="Poke API img"
        className="api-png"
      />
      <div className="row poke-card text-center">
        <div className="col back-button">
          <button className="card-top" onClick={navigateBack}>
            <FontAwesomeIcon
              icon={faCircleLeft}
              size="3x"
              style={{ color: "#B197FC" }}
            />
          </button>
        </div>
        <button
          className="col liked-pokemon card-top"
          onClick={likePokemonList}
        >
          <FontAwesomeIcon
            icon={faGratipay}
            size="3x"
            style={{ color: "#e9678a" }}
          />
        </button>
        <div className="container poke-card-content">
          {pokemonData && (
            <>
              <div className="">
                <img
                  src={pokemonData.sprites.other.dream_world.front_default}
                  alt="pokemon image"
                  className="pokemon-image"
                />
              </div>
              <h1 className="">{pokemonData.name.toUpperCase()}</h1>
              <div className="row pill">
                {pokemonData.types?.map((type, index) => (
                  <li className=" type-pills" key={index}>
                    {type.type.name}
                  </li>
                ))}
                {pokemonData.abilities?.map((ability, index) => (
                  <li className=" ability-pills" key={index}>
                    {ability.ability.name}
                  </li>
                ))}                
              </div>
              <div className="row">
                <div className="col">
                  <button className="dislike-button" onClick={dislikePokemon}>
                    Dislike
                  </button>
                </div>
                <div className="col">
                  <button className="like-button" onClick={likePokemon}>
                    Like
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
