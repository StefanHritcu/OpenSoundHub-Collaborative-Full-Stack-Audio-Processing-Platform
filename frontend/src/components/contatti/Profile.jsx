import PropTypes from "prop-types";
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import stefanImg from "./../../assets/images/stefan.png";
import micheleImg from "./../../assets/images/michele.png";

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

  return (
    <main className="profile-main-mobile" aria-labelledby="profile-name">
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
      <section className="mansione text-center pt-4 pb-2">
        <h2 className="bg-gray-900 text-white py-4 my-2 text-center">
          {mansione}
        </h2>
      </section>

      {/* DESCRIPTION */}
      <section className="p-2 my-6">
        <p className="description">{description}</p>
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
        <p className="bg-gray-900 text-white py-4 my-2 text-center">
          Hard Skills
        </p>
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
