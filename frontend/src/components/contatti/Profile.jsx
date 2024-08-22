import PropTypes from "prop-types";
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import stefanImg from "./../../assets/images/stefan.png";
import micheleImg from "./../../assets/images/michele.png";
import "./contatti.css";
import { Link } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";

function Profile({
  name,
  mansione,
  description,
  linkedin,
  github,
  gmail,
  skills1,
  skills2,
}) {
  // Funzione per determinare il percorso dell'immagine
  const getImagePath = (name) => {
    switch (name) {
      case "Stefan Hritcu":
        return stefanImg;
      case "Michele Grimaldi":
        return micheleImg;
      default:
        return;
    }
  };
  const techColors = {
    react: "text-blue-500",
    html: "text-orange-500",
    css: "text-blue-300",
    javascript: "text-yellow-500",
    typescript: "text-blue-700",
    mern: "text-green-500",
    sviluppo: "text-purple-500",
    web: "text-purple-500",
    stefan: "bg-yellow-400 text-black p-1",
    hritcu: "bg-yellow-400 text-black p-1 mr-2",
    michele: "bg-yellow-400 text-black p-1",
    grimaldi: "bg-yellow-400 text-black p-1 mr-2",
    sound: "text-red-600",
    designer: "text-red-600",
    tecnico: "text-red-600",
    videogiochi: "text-yellow-600",
    certificazione: "text-purple-600",
    lua: "text-blue-600",
    "c++": "text-orange-600",
    "c#": "text-purple-600",
    python: "text-yellow-500",
    rust: "text-orange-600",
    sql: "text-green-500",
  };

  const renderDescription = () => {
    return description.split(" ").map((word, index) => {
      // Rimuove la punteggiatura dalla parola per il confronto
      const cleanedWord = word.replace(/[.,;!?]/g, "").toLowerCase();

      if (techColors[cleanedWord]) {
        return (
          <span key={index} className={`${techColors[cleanedWord]} tex-3xl`}>
            {word}{" "}
          </span>
        );
      }
      return word + " ";
    });
  };

  return (
    <>
      <main className="profile-main-mobile" aria-labelledby="profile-name">
        <div className="flex justify-start items-center">
          <Link to="/contatti">
            <IoMdArrowRoundBack className="text-black w-12 h-12" />
          </Link>
        </div>
        {/* HEADER SECTION */}
        <header className="flex justify-start items-center m-4">
          <img
            className="img-mobile"
            src={getImagePath(name)}
            alt={`Immagine di ${name}`}
            width="150"
            height="150"
          />
          <h1
            id="profile-name"
            className="text-center px-4 text-2xl font-bold m-auto"
          >
            {name}
          </h1>
        </header>

        {/* MANSIONE */}
        <section className="mansione text-center">
          <h2 className="bg-gray-900 text-white py-4 my-2 text-center">
            {mansione}
          </h2>
        </section>

        {/* DESCRIPTION */}
        <section className="p-2 my-6">
          <p className="description">{renderDescription()}</p>
        </section>

        {/* LINKS */}
        <section className="style-diverso">
          <p className="bg-gray-900 text-white py-4 text-center">
            Link di riferimento
          </p>
          <div className="flex justify-around items-center my-8">
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Profilo LinkedIn di ${name}`}
            >
              <FaLinkedin className="w-12 h-12 text-blue-600" />
            </a>
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Profilo GitHub di ${name}`}
            >
              <FaGithubSquare className="w-12 h-12 text-black" />
            </a>
            <a href={`mailto:${gmail}`} aria-label={`Invia un'email a ${name}`}>
              <SiGmail className="w-12 h-12 text-red-600" />
            </a>
          </div>
        </section>

        {/* SKILLS */}
        <section>
          <p className="bg-gray-900 text-white py-4 text-center">Hard Skills</p>
          <div className="skills-section flex justify-around items-center">
            <div className="flex flex-col">
              <ol>
                {skills1.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ol>
            </div>
            <div className="flex flex-col mt-4">
              <ol>
                {skills2.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ol>
            </div>
          </div>
        </section>
      </main>

      {/* PER DISPOSITIVI TABLET LAPTOP E COMPUTER */}
      <main className="profile-main-tablet-and-laptop">
        <div className="flex justify-start items-center mb-4">
          <Link to="/contatti">
            <IoMdArrowRoundBack className="text-white w-12 h-12" />
          </Link>
        </div>
        <h1 className="name-tablet-laptop">{name}</h1>
        <div className="flex justify-center items-center relative">
          {/* GENERALITà DELLA PERSONA */}
          <div className="generalita-tablet-laptop">
            <section className="mansione-tablet-laptop text-center">
              <h2>{mansione}</h2>
            </section>
            {/* DESCRIPTION */}
            <section className="p-2 my-6">
              <p className="description">{renderDescription()}</p>
            </section>

            {/* LINKS */}
            <section className="style-diverso rounded-tablet-laptop">
              <p className="bg-customGray text-white py-4 text-center">
                Link di riferimento
              </p>
              <div className="flex justify-around items-center my-8">
                <a
                  href={linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Profilo LinkedIn di ${name}`}
                >
                  <FaLinkedin className="w-12 h-12 text-blue-600" />
                </a>
                <a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Profilo GitHub di ${name}`}
                >
                  <FaGithubSquare className="w-12 h-12 text-black" />
                </a>
                <a
                  href={`mailto:${gmail}`}
                  aria-label={`Invia un'email a ${name}`}
                >
                  <SiGmail className="w-12 h-12 text-red-600" />
                </a>
              </div>
            </section>

            {/* SKILLS */}
            <section>
              <p className="bg-customGray text-white py-4 text-center">
                Hard Skills
              </p>
              <div className="flex justify-around items-center">
                <div className="flex flex-col">
                  <ol>
                    {skills1.map((skill, index) => (
                      <li key={index}>{skill}</li>
                    ))}
                  </ol>
                </div>
                <div className="flex flex-col mt-4">
                  <ol>
                    {skills2.map((skill, index) => (
                      <li key={index}>{skill}</li>
                    ))}
                  </ol>
                </div>
              </div>
            </section>
          </div>
          {/* IMMAGINE PERSONA */}

          <img
            className="img-tablet-laptop"
            src={getImagePath(name)}
            alt={`Immagine di ${name}`}
            width="150"
            height="150"
          />
        </div>
      </main>
    </>
  );
}

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  mansione: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  linkedin: PropTypes.string.isRequired,
  github: PropTypes.string.isRequired,
  gmail: PropTypes.string.isRequired,
  skills1: PropTypes.arrayOf(PropTypes.string).isRequired,
  skills2: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Profile;
