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

  useEffect(() => {
    const fetchPokemonData = async () => {
      try {
        const response = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${likedPokemon}`
        );
        // console.log(response.data);
        setPokemonData(response.data);
      } catch (error) {
        console.error("Err fetching Pokemon", error);
      }
    };
    fetchPokemonData();
  }, [likedPokemon]);

  const navigateBack = () => {
    console.log("button pressed");
    navigate("/");
  };

  const likePokemonList = () => {
    console.log("liked pokemon list");
    navigate("/pokemon_liked");
  };

  const dislikePokemon =() =>{
    setLikedPokemon(likedPokemon +1)
  }

  const likePokemon =() =>{
    setLikedPokemon(likedPokemon)
    let likedPokemonList = []
    likedPokemonList.push(likedPokemon)
    window.localStorage.setItem('pokemon-id',JSON.stringify(likedPokemonList))
    dislikePokemon()
  }

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
                {/* <li className="col type-pills">fire</li>
                <li className="col type-pills">Flying</li>
                <li className="col ability-pills">blaze</li>
                <li className="col ability-pills">Solar</li> */}
              </div>
              <div className="row">
                <div className="col">
                  <button 
                  className="dislike-button"
                  onClick={dislikePokemon}>Dislike</button>
                </div>
                <div className="col">
                  <button 
                  className="like-button"
                  onClick={likePokemon}>Like</button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
