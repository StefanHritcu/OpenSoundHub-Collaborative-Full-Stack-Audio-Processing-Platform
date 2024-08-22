import "./contatti.css";
import StefanImg from "./../../assets/images/stefan.png";
// importo il JSON dalla cartella data
import teamData from "./../../data/contatti.json";

function Stefan() {
  //? controllo se i dati sono disponibili
  if (!teamData || teamData.length === 0) {
    return <p>Caricamento in corso...</p>;
  }

  const { name } = teamData[0] || {};
  return (
    <>
      <div className="contatti-style">
        {/* ----------- INFORMAZIONI DI CONTATTO DI Stefan Hritcu ----------- */}
        <div className="contact-card">
          {/* immagine & nome/cognome */}
          <div className="flex justify-around items-center">
            {/* sezione delle informazioni */}
            <img className="image-card" src={StefanImg} alt="img" />
            <h2 className="wrap-text">{name}</h2>
          </div>
        </div>
      </div>
    </>
  );
}
export default Stefan;
