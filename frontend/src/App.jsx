import { Route, Routes } from "react-router-dom";
import "./index.css";
import Header from "./components/header/Header";
import HomePage from "./components/home/HomePage";
import ChiSiamo from "./components/chisiamo/ChiSiamo";
import DrawerMenu from "./components/DrawerMenu";
import Contatti from "./components/contatti/Contatti";

function App() {
  return (
    <>
      <DrawerMenu />
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/chisiamo" element={<ChiSiamo />} />
        <Route path="/contatti" element={<Contatti />} />
      </Routes>
    </>
  );
}

export default App;
