import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

export default function LuisPagePok() {
  const params = useParams();
  console.log("this is my params", params);

  const [getter, set_Getter] = useState();
  console.log("testing getter and setter", getter, set_Getter);

  const pushData = async () => {
    try {
      const api = `https://pokeapi.co/api/v2/pokemon/${params.name}`;
      const res = await axios.get(api);
      console.log("this is my response", res);
      set_Getter(res.data);
    } catch (error) {}
  };

  useEffect(() => {
    pushData();
  }, []);
  return (
    <div>
      <div> Details page from pokemons</div>
      <div>
        {!getter ? (
          "Loading"
        ) : (
          <div>
            <h1> {params.name}</h1>
            <img src={getter.sprites.front_default} />
            <div>Base experice:{getter.base_experience}</div>
          </div>
        )}
      </div>
      {/* <p> {params.name}</p>
      <div>Base experice:{getter.base_experience}</div>
      <div> weight :{getter.weight} </div> */}
    </div>
  );
}
