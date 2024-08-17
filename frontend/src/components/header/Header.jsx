import { Link } from "react-router-dom";
import LogoMobile from "./../../assets/images/main-logo.png";
import LogoTablet from "./../../assets/images/tablet-logo.png";
import LogoComputer from "./../../assets/images/computer-logo.png";

function Header() {
  return (
    <>
      <header className="bg-secondary p-1">
        {/* Intestazione principale del sito */}

        {/* Sezione di navigazione principale */}
        <nav aria-label="Navigazione principale">
          {/* Logo per dispositivi mobili */}
          <Link to="/" aria-label="Vai alla homepage">
            <img
              src={LogoMobile}
              alt="Logo per dispositivi mobili"
              className="logo logo-mobile"
              title="Home"
            />
          </Link>

          {/* Logo per tablet */}
          <Link to="/" aria-label="Vai alla homepage">
            <img
              src={LogoTablet}
              alt="Logo per tablet"
              className="logo logo-tablet"
              title="Home"
            />
          </Link>

          {/* Logo per desktop */}
          <Link to="/" aria-label="Vai alla homepage">
            <img
              src={LogoComputer}
              alt="Logo per desktop"
              className="logo logo-computer"
              title="Home"
            />
          </Link>
        </nav>
      </header>
    </>
  );
}

export default Header;
