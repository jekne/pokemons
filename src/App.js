import logo from "./logo.svg";
import "./App.css";
import PokemonDiscoveryPage from "./pages/PokemonDiscoveryPage";
import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import DetailsPage from "./pages/DetailsPage";
import Luis from "./pages/Luis";
import LuisPagePok from "./pages/LuisPagePok";

function App() {
  return (
    <div className="App">
      <div>This is the new home page</div>
      {/* <h1> POKEMON PAGE</h1> */}
      <Routes>
        <Route path="/" />
        <Route path="/luis" element={<Luis />} />
        <Route path="/details/:name" element={<LuisPagePok />} />
      </Routes>
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/discovery" element={<PokemonDiscoveryPage />} />
        <Route path="/details/:name" element={<DetailsPage />} />
      </Routes> */}
    </div>
  );
}

export default App;
