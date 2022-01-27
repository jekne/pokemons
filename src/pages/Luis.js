import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Luis() {
  const [pokemons, set_pokemons] = useState();

  const displayPokemonNames = async () => {
    try {
      const api = `https://pokeapi.co/api/v2/pokemon`;
      const response = await axios.get(api);
      console.log("this is my response ", response);
      set_pokemons(response.data.results);
    } catch (error) {}
  };

  useEffect(() => {
    displayPokemonNames();
  }, []);

  return (
    <div>
      <div> Luiz page</div>
      {!pokemons
        ? "Loading"
        : pokemons.map((pok, index) => {
            return (
              <div key={index}>
                <ul>
                  <li>
                    <Link to={`/details/${pok.name}`}>Pokemons {pok.name}</Link>
                  </li>
                </ul>
              </div>
            );
          })}
    </div>
  );
}
