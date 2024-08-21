import { Link } from "react-router-dom";
import StefanImg from "./../../assets/images/stefan.png";
import MicheleImg from "./../../assets/images/michele.png";

function Contatti() {
  return (
    <section className="px-4 mt-4">
      <header className="text-center mb-6">
        <h1 className="text-2xl font-semibold">Contatti dei programmatori</h1>
        <p className="text-xl font-medium mt-2">
          Qui puoi trovare i contatti dei programmatori frontend e backend del
          progetto.
        </p>
      </header>

      <div className="responsive-cards">
        <article className="mb-8">
          <h2 className="text-xl ml-3 font-semibold mb-2">Frontend</h2>
          <Link
            to="stefan"
            className="block lunghezza-card hover:bg-gray-800 hover:text-white transition-colors duration-300"
            aria-label="Contatto con Stefan Hritcu"
          >
            <div className="contatti-iniziali flex items-center m-3 p-8 rounded-2xl bg-white shadow-md hover:bg-gray-800 hover:text-white transition-colors duration-300">
              <img
                className="w-36 h-auto bg-gray-200 rounded-2xl"
                src={StefanImg}
                alt="Stefan Hritcu"
              />
              <div className="ml-6">
                <p className="text-2xl ml-6 font-semibold">Stefan Hritcu</p>
              </div>
            </div>
          </Link>
        </article>

        <article className="mb-8">
          <h2 className="text-xl ml-3 font-semibold mb-2">Backend</h2>
          <Link
            to="michele"
            className="block lunghezza-card hover:bg-gray-800 hover:text-white transition-colors duration-300"
            aria-label="Contatto con Michele Grimaldi"
          >
            <div className="contatti-iniziali flex items-center m-2 p-6 rounded-2xl bg-white shadow-md hover:bg-gray-800 hover:text-white transition-colors duration-300">
              <img
                className="w-32 h-auto bg-gray-200 rounded-2xl"
                src={MicheleImg}
                alt="Michele Grimaldi"
              />
              <div className="ml-6">
                <p className="text-2xl ml-6 font-semibold">Mik Grimaldi</p>
              </div>
            </div>
          </Link>
        </article>
      </div>
    </section>
  );
}

export default Contatti;
