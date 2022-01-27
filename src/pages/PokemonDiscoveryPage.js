import axios from "axios";
import { useEffect, useState } from "react";
import NavBar from "../component/NavBar";
import { Link } from "react-router-dom";

export default function PokemonDiscoveryPage() {
  const [pokemons, set_Pokemons] = useState();
  console.log("this is my pokemon and my set pokemon", pokemons, set_Pokemons);

  const getData = async () => {
    try {
      const api = "https://pokeapi.co/api/v2/pokemon?limit=151";
      const response = await axios.get(api);
      console.log("this is my response", response);
      set_Pokemons(response.data.results);
    } catch (error) {}
  };
  const [filter, set_filter] = useState();

  const updateFilter = (e) => {
    set_filter(e.target.value);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <h1>THIS IS THE DISCOVERY PAGE OF POKEMONS</h1>
      <NavBar />
      <input type="text" value={filter} onChange={updateFilter} />
      {!pokemons
        ? "loading"
        : pokemons.map((pok, y) => {
            return (
              <div key={y}>
                <ul>
                  <li>
                    <Link to={`/details/${pok.name}`}> {pok.name}</Link>
                  </li>
                </ul>
              </div>
            );
          })}
    </div>
  );
}
//   return (
//     <div>
//       <h1>THIS IS THE DISCOVERY PAGE OF POKEMONS</h1>
//       <NavBar />
//       <input type="text" value={filter} onChange={updateFilter} />
//      {!pokemons ? (pokemons.filter((pok)=> pok.name.startWith(filter)).map((pok , index)=>{
//      return (
//                 <div key={index}>
//                   <ul>
//                     <li>
//                       <Link to={`/details/${pok.name}`}> {pok.name}</Link>
//                     </li>
//                   </ul>
//                 </div>
//               );
//       })) }
//     </div>
//   );
// }
