import "./chisiamo.css";
import ChiSiamoImage1 from "./../../assets/images/chisiamoImage.jpg";
import ChiSiamoImage2 from "./../../assets/images/chisiamoImage2.jpg";

import { Link } from "react-router-dom";

function ChiSiamo() {
  return (
    <>
      <main>
        <header>
          <h1 className="chisiamo-title">Piacere di conoscerti</h1>
        </header>

        {/* Introduzione */}
        <section aria-labelledby="intro-title">
          <h2 id="intro-title" className="chisiamo-second-title">
            Sei appassionato di <span className="text-red-400">MUSICA</span>?
            Vuoi modificare file audio o crearne di nuovi in modo{" "}
            <span className="second-title-underline">semplice e gratuito</span>?
          </h2>
        </section>

        {/* Descrizione e imagine */}
        <section
          className="chisiamo-responsive-first-div"
          aria-labelledby="about-us"
        >
          <img
            className="chisiamo-foto1"
            src={ChiSiamoImage2}
            alt="Immagine dei programmatori Stefano e Michele"
          />
          <div>
            <h3
              id="about-us"
              className="documentation-style visually-hidden text-center text-2xl"
            >
              Chi siamo
            </h3>
            <p className="chisiamo-terzo-title">
              Se la risposta è sì, sei nel posto giusto!{" "}
              <span className="text-white bg-purple-600 p-1 mx-2">
                Benvenuto su OpenSoundHub
              </span>
              , un sito open-source creato con l&apos;obiettivo di migliorare le
              tue capacità di programmazione e collaborazione in team. Qui,{" "}
              <span className="text-blue-500">Stefano</span> si occupa dello
              sviluppo frontend e <span className="text-red-500">Michele</span>{" "}
              del backend, offrendo l&apos;opportunit&agrave; di espandere il
              proprio CV e portfolio.
            </p>
          </div>
        </section>

        {/* Link che porta alla home dove ci saranno le funzionalità */}
        <section aria-labelledby="cta-section">
          <div id="cta-section" className="cta-container">
            <Link to="/">
              <p className="chisiamo-iniziasubito">Inizia subito</p>
            </Link>
          </div>
        </section>

        {/* Informazioni aggiuntive */}
        <section
          className="chisiamo-responsive-second-div"
          aria-labelledby="platform-info"
        >
          <img
            className="chisiamo-foto1"
            src={ChiSiamoImage1}
            alt="Interfaccia della piattaforma OpenSoundHub"
          />
          <div>
            <h3
              id="platform-info"
              className="documentation-style visually-hidden text-center text-2xl"
            >
              Informazioni sulla piattaforma
            </h3>
            <p className="chisiamo-terzo-title my-6">
              <span className="text-yellow-400">OpenSoundHub</span> non è solo
              una piattaforma per gli sviluppatori, ma anche uno strumento
              potente per chi ama lavorare con i{" "}
              <span className="text-sky-500">file audio</span>. Potrai{" "}
              <span className="text-white bg-green-600 p-1 mx-2">gestire</span>,
              <span className="text-white bg-green-600 p-1 mx-2">
                modificare
              </span>{" "}
              e
              <span className="text-white bg-green-600 p-1 mx-2">generare</span>
              tracce sonore direttamente dal browser, tutto in maniera intuitiva
              e accessibile. Scopri le possibilità offerte da OpenSoundHub e
              unisciti a noi per crescere insieme, sia nella programmazione che
              nella creazione musicale!
            </p>
          </div>
        </section>
      </main>
    </>
  );
}

export default ChiSiamo;
