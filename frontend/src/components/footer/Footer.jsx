import "./../../index.css";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import { Link } from "react-router-dom";

function Footer() {
  const handleFacebookClick = () => {
    alert(
      "Se i profili Facebook non si aprono, assicurati che i popup siano abilitati nel tuo browser."
    );
    window.open(
      "https://www.facebook.com/profile.php?id=61563101911367",
      "_blank"
    );
    window.open(
      "https://www.facebook.com/profile.php?id=61560346263496",
      "_blank"
    );
  };

  const handleGithubClick = () => {
    alert(
      "Se i profili Github non si aprono, assicurati che i popup siano abilitati nel tuo browser."
    );
    window.open("https://github.com/StefanHritcu", "_blank");
    window.open("https://github.com/MikyMikeMusic", "_blank");
  };

  const handleLinkedinClick = () => {
    alert(
      "Se i profili Linkedin non si aprono, assicurati che i popup siano abilitati nel tuo browser."
    );
    window.open(
      "https://www.linkedin.com/in/stefan-florian-hritcu-ba615431b/",
      "_blank"
    );
    window.open(
      "https://www.linkedin.com/in/michele-grimaldi-599b36280/",
      "_blank"
    );
  };

  const handleGmailClick = () => {
    alert(
      "Se i link Gmail non si aprono, assicurati che i popup siano abilitati nel tuo browser."
    );
    window.open("mailto:stefano.94h@gmail.com", "_blank");
    window.open("mailto:mikgrimaldi7@gmail.com", "_blank");
  };

  return (
    <footer className="text-white bg-dark">
      {/* Sezione link social */}
      <nav
        aria-label="Social media links"
        className="links-footer flex justify-center space-x-4 pt-2"
      >
        <a
          className="single-link-footer"
          onClick={handleFacebookClick}
          aria-label="Facebook"
          role="button"
          title="Facebook"
        >
          <FaFacebook aria-hidden="true" />
        </a>
        <a
          className="single-link-footer"
          onClick={handleGithubClick}
          aria-label="GitHub"
          role="button"
          title="Github"
        >
          <FaGithub aria-hidden="true" />
        </a>
        <a
          className="single-link-footer"
          onClick={handleLinkedinClick}
          aria-label="LinkedIn"
          role="button"
          title="Linkedin"
        >
          <FaLinkedin aria-hidden="true" />
        </a>
        <a
          className="single-link-footer"
          onClick={handleGmailClick}
          aria-label="Email"
          role="button"
          title="Gmail"
        >
          <SiGmail aria-hidden="true" />
        </a>
      </nav>

      {/* Sezione navigazione interna */}
      <nav
        className="internal-nav-footer justify-center py-2"
        aria-label="Footer navigation"
      >
        <div className="flex justify-center items-center">
          <Link to="/" className="footer-link-internal-nav">
            Home
          </Link>
          <Link to="/chisiamo" className="footer-link-internal-nav">
            Chi Siamo
          </Link>
          <Link to="/contatti" className="footer-link-internal-nav">
            Contatti
          </Link>
        </div>
      </nav>

      {/* Sezione copyright */}
      <div className="copyright-div text-center py-2">
        <p className="copyright text-sm">
          <span>&copy; 2024 Designed by </span>
          <span className="designed-by">Stefan Hritcu</span>. Tutti i diritti
          riservati.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
