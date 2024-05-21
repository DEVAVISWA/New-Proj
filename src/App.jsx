import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import InstructionPage from "./components/InstructionPage/InstructionPage";
import Pokemon from "./components/PokemonPage/Pokemon";
import LikedPokemon from "./components/LikedPokemon/LikedPokemon";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<InstructionPage />} />
        <Route path="/pokemon" element={<Pokemon />} />
        <Route path="/pokemon_liked" element={<LikedPokemon />} />
      </Routes>
    </Router>
  );
}
