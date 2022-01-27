import { getDefaultNormalizer } from "@testing-library/dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import NavBar from "../component/NavBar";
import PokemonDiscoveryPage from "./PokemonDiscoveryPage";

export default function DetailsPage() {
  const [pokemons, set_pokemons] = useState();

  const params = useParams();
  console.log("this is my params", params);

  const fetchPokemonDetails = async (name) => {
    try {
      const api = `https://pokeapi.co/api/v2/pokemon/${params.name}`;
      const res = await axios.get(api);
      console.log("this is my res", res);
      set_pokemons(res.data);
      //   set_pokemons(res.data);
    } catch (error) {}
  };

  useEffect(() => {
    fetchPokemonDetails();
  }, []);

  return (
    <div>
      <div> THIS IS THE DETAILS PAGE</div>
      {/* <NavBar /> */}

      <h1> {params.name}</h1>
      <div></div>
      <div>
        {!pokemons ? (
          "Loading"
        ) : (
          <div>
            <ul>
              <li>{pokemons.base_experience}</li>
              <li>{}</li>
              <img
                style={{ width: 200 }}
                src={pokemons.sprites.front_default}
              />
              <div>Base experice:{pokemons.base_experience}</div>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

// import { useParams } from "react-router-dom";
// import { useEffect, useState } from "react";
// import axios from "axios";

// function DetailsPage() {
//   const routeParams = useParams();
//   const [pokemon, setPokemon] = useState(null);

//   useEffect(async () => {
//     async function getPokemonDetails() {
//       const pokemonResponse = await axios.get(
//         `https://pokeapi.co/api/v2/pokemon/${routeParams.pokemon_name}`
//       );
//       setPokemon(pokemonResponse.data);
//     }
//     getPokemonDetails();
//   }, []);

//   return pokemon ? (
//     <div>
//       <h2>{pokemon.name}</h2>
//       <img src={pokemon.sprites.front_default} />
//       <p>
//         Types:{" "}
//         {pokemon.types.map((typeObj) => (
//           <span>{typeObj.type.name} </span>
//         ))}
//       </p>
//       <p>Weight: {pokemon.weight} hectograms</p>
//     </div>
//   ) : (
//     <p>Loading ...</p>
//   );
// }

// export default DetailsPage;
