import axios from "axios";
import { useEffect, useState } from "react";
import PokemonPreview from "@/app/components/PokemonPreview";


export default function PokemonsList({ pokemons }) {
   
  return (
    <section className="pt-14 grid grid-cols-[repeat(auto-fit,_minmax(220px,_1fr))] gap-4 gap-y-14">
      {pokemons && pokemons?.map((pokemon) => (
        <PokemonPreview
          key={pokemon.url}
          pokemonURL={pokemon.url}
          
        />
        // onClick={showPokemon}
      ))}
    </section>
  );
}
