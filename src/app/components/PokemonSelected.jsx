"use client";

import { useEffect } from "react";
import usePokemonContext from "../hooks/usePokemonContext";

export default function PokemonsSelected() {
  const {
    pokemonDetail,
    capturareds,
    setCapturateds,
    setIsCapturated,
    isCapturated,
  } = usePokemonContext();

  const validatePokemonCaptured = () => {
    const quantity = capturareds.filter((pokemonCap) => {
      return pokemonDetail.id == pokemonCap.id;
    });
    quantity.length > 0 ? setIsCapturated(true) : setIsCapturated(false);

    return quantity
  };

  const onCaptured = () => {
    
    const quantityPok = validatePokemonCaptured();
    
    if(quantityPok==0) {
      capturareds.push(pokemonDetail);
      setCapturateds(capturareds);
      validatePokemonCaptured()

      console.log('capturareds= ,',capturareds)
    }
  };

  useEffect(() => {
    validatePokemonCaptured();
  }, [pokemonDetail]);

  return (
    <section className="block sticky top-0 h-screen pl-4">
      <article
        className={`absolute z-20 bottom-0 bg-white w-full h-[85%] rounded-tl-3xl rounded-tr-3xl px-3 py-5`}
      >
        <div className="w-full h-[250px] rounded-3xl text-center">
          {!pokemonDetail ? (
            <>
              <img
                src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f82cc357-e354-4ef7-8b2d-647f6f756800/dbf1jrd-095f7fd1-e33b-4e26-b456-8cbf40d0e5d1.png/v1/fill/w_1024,h_765,q_80,strp/quien_es_ese_pokemon__who_s_that_poke___by_shikomt_by_shikomt_dbf1jrd-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzY1IiwicGF0aCI6IlwvZlwvZjgyY2MzNTctZTM1NC00ZWY3LThiMmQtNjQ3ZjZmNzU2ODAwXC9kYmYxanJkLTA5NWY3ZmQxLWUzM2ItNGUyNi1iNDU2LThjYmY0MGQwZTVkMS5wbmciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.YZOIomNz5t-pjv59EuK-mtru0QgjhlTtGEGPLuzR1hM"
                alt="Quién es ese pokemón"
                className="object-cover rounded-3xl"
              />
              <h1 className="text-2xl pt-5">Seleccione un pokemón</h1>
            </>
          ) : (
            <>
              <div className="w-full border text-center flex items-center justify-center">
                <img
                  src={
                    pokemonDetail?.sprites.versions["generation-v"][
                      "black-white"
                    ].front_default
                  }
                  alt="Quién es ese pokemón"
                  className="object-cover rounded-3xl h-[250px]"
                />
              </div>

              <div className="text-left py-5">
                <p>
                  <b className="font-bold">ID:</b> {pokemonDetail?.id}
                </p>
                <p>
                  <b className="font-bold">NOMBRE:</b> {pokemonDetail?.name}
                </p>
                <p>
                  <b className="font-bold">TIPO:</b>
                </p>
                <ul className="flex flex-col">
                  {pokemonDetail?.types.map((type) => (
                    <li
                      className={`rounded-md px-2  text-sm`}
                      key={type.type.name}
                    >
                      - {type.type.name}
                    </li>
                  ))}
                </ul>
                <p>
                  <b className="font-bold">HABILIDAD:</b>
                </p>
                <ul className="flex flex-col">
                  {pokemonDetail?.abilities.map((ability) => (
                    <li
                      className={`rounded-md px-2  text-sm`}
                      key={ability.ability.name}
                    >
                      - {ability.ability.name}
                    </li>
                  ))}
                </ul>
                <p>
                  <b className="font-bold">
                    CAPTURADO:{isCapturated ? "Si" : "No"}
                  </b>
                </p>
              </div>
              <button
                onClick={onCaptured}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Capturar
              </button>
            </>
          )}
        </div>
      </article>
    </section>
  );
}
