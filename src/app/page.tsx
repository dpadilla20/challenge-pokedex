import Image from "next/image";
import Pokemons from "@/app/components/Pokemons";
import PokemonSelected from "@/app/components/PokemonSelected";
import { PokemonProvider } from "./context/PokemonContext.jsx";


export default function Home() {
  return (
    <PokemonProvider>
      <main className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_350px]">
        <Pokemons />
        <PokemonSelected />
      </main>
    </PokemonProvider>
  );
}
