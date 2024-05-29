import React, { useEffect, useState } from "react";
import "./Pokemon.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGratipay } from "@fortawesome/free-brands-svg-icons";
import axios from "axios";
import { faCircleLeft, faMoon, faSun } from "@fortawesome/free-regular-svg-icons";
import { useNavigate } from "react-router-dom";

export default function Pokemon() {

  const [darkMode, setDarkMode] = useState(true);
  const changeMode = () => {
    setDarkMode(!darkMode);
  };

  const navigate = useNavigate();
  const [pokemonData, setPokemonData] = useState("");
  // console.log(pokemonData)

  const [likedPokemon, setLikedPokemon] = useState([]);
  
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
    const data= JSON.parse(localStorage.getItem('liked-pokemon')) || []
    setLikedPokemon (data)
  }, []);
  
  const navigateBack = () => {
    navigate("/");
  };
  
  const likePokemonList = () => {
    navigate("/pokemon_liked");
  };
  
  const nextPokemon = () => {
    fetchPokemonData();
  };
  
  const dislikePokemon = () => {
    // fetchPokemonData();
    nextPokemon()
  };
  
  const likePokemon = () => {
   const likedPokemonArr= [...likedPokemon,pokemonData]
   setLikedPokemon(likedPokemonArr)
    // console.log(pokemonData)
    localStorage.setItem('liked-pokemon', JSON.stringify(likedPokemonArr));    
    nextPokemon();
  };
  
  return (
    <div className="background">
      <button onClick={changeMode} className="light-dark-mode">
        {darkMode ? (
          <FontAwesomeIcon
            icon={faSun}
            size="2x"
            style={{ color: "#FFD43B" }}
          />
        ) : (
          <FontAwesomeIcon icon={faMoon} size="2x" />
        )}
      </button>
      <img
        src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png"
        alt="Poke API img"
        className="api-png"
      />
      <div className={`row text-center all-poke-card${darkMode?'':'-dark'}`}>
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
                  src={pokemonData?.sprites?.other?.dream_world?.front_default}
                  alt="pokemon image"
                  className="pokemon-image"
                />
              </div>
              <h1 className="">{pokemonData?.name?.toUpperCase()}</h1>
              <div className="row pill">
                {pokemonData?.types?.map((type, index) => (
                  <li className={`type-pills${darkMode?'':'-dark'}`} key={index}>
                    {type.type.name}
                  </li>
                ))}
                {pokemonData?.abilities?.map((ability, index) => (
                  <li className={`ability-pills${darkMode?'':'-dark'}`} key={index}>
                    {ability.ability.name}
                  </li>
                ))}                
              </div>
              <div className="row">
                <div className="col">
                  <button className={`dislike-button${darkMode?'':'-dark'}`} onClick={dislikePokemon}>
                    Dislike
                  </button>
                </div>
                <div className="col">
                  <button className={`like-button${darkMode?'':'-dark'}`} onClick={likePokemon}>
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
