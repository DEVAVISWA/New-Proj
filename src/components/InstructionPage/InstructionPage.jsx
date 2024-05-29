import React from "react";
import "./InstructionPage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGratipay } from "@fortawesome/free-brands-svg-icons/faGratipay";
import { useNavigate } from "react-router-dom";

export default function InstructionPage() {
  const navigate = useNavigate();
  let buttonHandler = () => {
    navigate("/pokemon");
  };
  return (
    <div className="background">
      <img
        src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png"
        alt="Poke API img"
        className="api-png"
      />
      <div className="all-poke-card">
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
              className="text-center btn btn-success "
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
