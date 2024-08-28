import { Route, Routes } from "react-router-dom";
import "./index.css";
import Header from "./components/header/Header";
import HomePage from "./components/home/HomePage";
import ChiSiamo from "./components/chisiamo/ChiSiamo";
import DrawerMenu from "./components/DrawerMenu";
import Contatti from "./components/contatti/Contatti";
import Stefan from "./components/contatti/Stefan";
import Michele from "./components/contatti/Michele";
import Footer from "./components/footer/Footer";
import GenerateAudio from "./components/funzionalità/GenerateAudio";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <DrawerMenu />
      <Header />

      {/* FLEX-GROW PERMETTE AL MAIN DI OCCUPARE LO SPAZIO SPINGENDO IL FOOTER IN BASSO */}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/chisiamo" element={<ChiSiamo />} />
          <Route path="/contatti" element={<Contatti />} />
          <Route path="contatti/stefan" element={<Stefan />} />
          <Route path="contatti/michele" element={<Michele />} />

          <Route path="/generateaudio" element={<GenerateAudio />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
