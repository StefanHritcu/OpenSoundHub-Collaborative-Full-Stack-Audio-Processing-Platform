import { Link } from "react-router-dom";

function HomePage() {
  return (
    <>
      <div className="pb-16 bg-gray-100 flex flex-col items-center p-6">
        {/* Title */}
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Benvenuti su AudioManager
        </h1>

        {/* Description */}
        <p className="text-lg text-gray-600 mb-8 text-center">
          Gestisci e modifica i tuoi file audio con facilità. Esplora le
          funzionalità attuali e scopri quelle che arriveranno presto!
        </p>

        {/* Cards Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
          {/* Card for Current Functionality */}
          <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">
              Modifica audio del file
            </h2>
            <p className="text-gray-600 mb-4">
              Modifica i tuoi file audio direttamente dal tuo browser. Regola il
              volume come preferisci e riceverai il tuo audio modificato.
            </p>
            <Link
              to="/audiomanager"
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-300"
            >
              Inizia Modifica
            </Link>
          </div>

          {/* Card for Upcoming Features */}
          <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">
              Funzionalità in arrivo
            </h2>
            <p className="text-gray-600 mb-4">
              Stiamo lavorando su nuove funzionalità per migliorare
              ulteriormente la tua esperienza. Resta sintonizzato per le novità!
            </p>
            <button
              className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md cursor-not-allowed"
              disabled
            >
              Presto Disponibile
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
