"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import PokemonsList from "@/app/components/PokemonsList";
import usePokemonContext from "../hooks/usePokemonContext";

export default function Pokemons() {
  const [getAllPokemons, setAllPokemons] = useState("");

  const {
    capturareds
  } = usePokemonContext();

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=100")
      .then(({ data }) => setAllPokemons(data.results))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="flex flex-col w-full">
      <h1 className="text-2xl font-bold">Pokemons</h1>
      <p className="font-bold">Tengo {capturareds.length <=1 ? `${capturareds.length} pokemon` : `${capturareds.length} pokemones`}</p>
      <form>
        <div className="bg-white p-4 flex rounded-2xl text-lg mt-5">
          <input
            className="outline-none flex-1"
            type="text"
            autoComplete="off"
            placeholder="Buscar pokemón"
            name="pokemonName"
          />
          {/* <button
            type="button"
            className="bg-red-500 p-2 rounded-xl shadow-lg shadow-red-500/50 hover:bg-red-400 transition-colors"
          >
            Buscar
          </button> */}
        </div>
      </form>
      <PokemonsList pokemons={getAllPokemons} />
    </div>
  );
}
