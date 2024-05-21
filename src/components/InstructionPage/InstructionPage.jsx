import React from "react";
import "./InstructionPage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGratipay } from "@fortawesome/free-brands-svg-icons/faGratipay";

export default function InstructionPage() {
  return (
    <div className="background">
        <img
          src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png"
          alt="Poke API img"
        />
      <div className="poke-card">
        <div className="container poke-card-content">
          <div className="row">
            <div className="col-9"></div>
            <div className="col-3">
              <FontAwesomeIcon
                icon={faGratipay}
                size="3x"
                style={{ color: "#e9678a" }}
              />
            </div>
          </div>
          <div className="row">
            <div className="col fs-3">How to Play PokeSwipe</div>
          </div>
          <div className="row">
            <div className="col">
              <li>Pokemon Appear One at a Time</li>
              <li>Choose "Like or "Dislike"</li>
              <li>Build Your Favorite Team</li>
            </div>
          </div>
          <div className="row">
            <button className="text-center btn btn-success">Let's Go!</button>
          </div>
        </div>
      </div>
    </div>
  );
}
