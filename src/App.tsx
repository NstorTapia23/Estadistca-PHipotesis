import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./Components/layout";
import { Inicio } from "./Components/Inicio/Inicio";
import { Media1n } from "./Components/Media/Media1n";
import { Cosa } from "./Components/Cosa/Cosa";
import { Varianza } from "./Components/Varianza/Varianza";
import { Media2n } from "./Components/Media/Media2n";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Inicio />} />
          <Route path="/Varianza" element={<Varianza />} />
          <Route path="/OtraCosa" element={<Cosa />} />
          <Route path="/1n" element={<Media1n />} />
          <Route path="/2n" element={<Media2n />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
