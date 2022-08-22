import "./App.css";
import { FizzBuzzPage } from "./pages/FizzBuzzPage";
import { ErrorPage } from "./pages/ErrorPage";
import { Home } from "./pages/Home";
import { Layout } from "./pages/Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="fizzbuzz" element={<FizzBuzzPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
