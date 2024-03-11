"use client";
import { createContext, useState } from "react";

const PokemonContext = createContext();

const PokemonProvider = ({ children }) => {
  const [pokemonDetail, setPokemonDetail] = useState(null);
  const [capturareds, setCapturateds] = useState([]);
  const [isCapturated, setIsCapturated] = useState(false);

  return (
    <PokemonContext.Provider
      value={{
        pokemonDetail,
        setPokemonDetail,
        capturareds,
        setCapturateds,
        isCapturated,
        setIsCapturated,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
};

export { PokemonContext, PokemonProvider };
