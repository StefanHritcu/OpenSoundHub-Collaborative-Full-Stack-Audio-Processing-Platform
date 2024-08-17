import { Route, Routes } from "react-router-dom";
import "./index.css";
import Header from "./components/header/Header";
import HomePage from "./components/home/HomePage";
import ChiSiamo from "./components/chisiamo/ChiSiamo";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contatti" element={<ChiSiamo />} />
      </Routes>
    </>
  );
}

export default App;
