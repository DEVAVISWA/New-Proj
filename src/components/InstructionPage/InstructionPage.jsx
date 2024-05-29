import React, { useState } from "react";
import "./InstructionPage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGratipay } from "@fortawesome/free-brands-svg-icons/faGratipay";
import { useNavigate } from "react-router-dom";
import { faMoon, faSun } from "@fortawesome/free-regular-svg-icons";

export default function InstructionPage() {
  const [darkMode, setDarkMode] = useState(true);
  const changeMode = () => {
    setDarkMode(!darkMode);
  };
  // console.log(darkMode);

  const navigate = useNavigate();
  let buttonHandler = () => {
    navigate("/pokemon");
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
      <div className={`all-poke-card${darkMode?'':'-dark'}`}>
        <div className="container poke-card-content">
          <div className="row padding">
            <div className="col-9"></div>
            <div className="col-3">
              <FontAwesomeIcon
                icon={faGratipay}
                size="3x"
                style={{ color: "#e9678a" }}
              />
            </div>
          </div>
          <div className="row ">
            <div className="col fs-2 padding">How to Play PokéSwipe</div>
          </div>
          <div className="row padding">
            <div className="col">
              <li>Pokémon Appear One at a Time</li>
              <li>Choose "Like or "Dislike"</li>
              <li>Build Your Favorite Team</li>
            </div>
          </div>
          <div className="row padding">
            <button
              className={`text-center btn lg-button${darkMode?'':'-dark'}`}
              onClick={buttonHandler}
            >
              Let's Go!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
