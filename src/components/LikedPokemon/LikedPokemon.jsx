import React, { useState } from "react";
import "./LikedPokemon.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleLeft,
  faMoon,
  faSun,
} from "@fortawesome/free-regular-svg-icons";
import { useNavigate } from "react-router-dom";

export default function LikedPokemon() {
  const likedPokemonJSON = JSON.parse(localStorage.getItem(`liked-pokemon`));
  // console.log(likedPokemonJSON);
  const navigate = useNavigate();
  const navigateBack = () => {
    navigate("/pokemon");
  };

  const [darkMode, setDarkMode] = useState(true);
  const changeMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="background liked-poke-bg">
      <div className="container">
        <div className="row">
          <div className="col">
            <button className="card-top" onClick={navigateBack}>
              <FontAwesomeIcon
                icon={faCircleLeft}
                size="3x"
                style={{ color: "#B197FC" }}
              />
            </button>
          </div>
          <div className="col dark-mode-button">
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
          </div>
        </div>
      </div>
      <div className="col"></div>
      <img
        src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png"
        alt="Poke API img"
        className="col api-png"
      />
      {likedPokemonJSON ? (
        likedPokemonJSON.map((val) => (
          <div
            className={`all-liked-poke-card${darkMode ? "" : "-dark"}`}
            key={val.id}
          >
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
