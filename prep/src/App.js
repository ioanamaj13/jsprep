import "./App.css";
import { FizzBuzzPage } from "./pages/FizzBuzzPage";
import { ErrorPage } from "./pages/ErrorPage";
import { Home } from "./pages/Home";
import { Layout } from "./pages/Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PalindromePage } from "./pages/PalindromePage";
import { BracketsPage } from "./pages/BracketsPage";
import { PokemonFetchPage } from "./pages/FetchDisplayData/PokemonFetchPage";
import { PokemonAxiosPage } from "./pages/FetchDisplayData/PokemonAxiosPage";
import { PokemonHttpPage } from "./pages/FetchDisplayData/PokemonHttpPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="fizzbuzz" element={<FizzBuzzPage />} />
          <Route path="palindrome" element={<PalindromePage />} />
          <Route path="brackets" element={<BracketsPage />} />
          <Route path="pokefetch" element={<PokemonFetchPage />} />
          <Route path="pokeaxios" element={<PokemonAxiosPage />} />
          <Route path="pokehttp" element={<PokemonHttpPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
