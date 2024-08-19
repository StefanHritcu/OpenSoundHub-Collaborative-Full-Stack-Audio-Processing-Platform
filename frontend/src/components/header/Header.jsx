import { Link } from "react-router-dom";
import LogoMobile from "./../../assets/images/main-logo.png";
import LogoTablet from "./../../assets/images/tablet-logo.png";
import LogoComputer from "./../../assets/images/computer-logo.png";

import { IoCloseOutline } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";

import { useDispatch, useSelector } from "react-redux";
import { setHeaderMenu } from "../../redux/slices/initialSlice";

function Header() {
  const statoHamburgerMenu = useSelector(
    (state) => state.statoIniziale.headerMenu
  );

  const dispatch = useDispatch();

  const handleHamburgerMenu = () => {
    dispatch(setHeaderMenu());
  };

  return (
    <header className="bg-secondary p-1 z-10">
      {/* Intestazione principale del sito */}

      {/* Sezione di navigazione principale */}
      <nav
        aria-label="Navigazione principale"
        className="flex justify-between items-center"
      >
        <div>
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
        </div>

        {/* links visibili solo per tablet e laptop */}
        <div className="header-links">
          <Link
            to="/"
            aria-label="Vai alla homepage"
            title="home"
            className="header-single-link-style"
          >
            Home
          </Link>
          <Link
            to="/chisiamo"
            aria-label="Vai alla sezione chisiamo"
            title="chiSiamo"
            className="header-single-link-style"
          >
            ChiSiamo
          </Link>
          <Link
            to="/contatti"
            aria-label="Vai alla sezione dei contatti"
            title="contatti"
            className="header-single-link-style"
          >
            Contatti
          </Link>
        </div>

        {/* hamburger menu e close menu ICON */}
        <div className="hamburger-menu text-white">
          {statoHamburgerMenu ? (
            <IoCloseOutline
              className="w-14 h-14 mr-3"
              onClick={handleHamburgerMenu}
            />
          ) : (
            <RxHamburgerMenu
              className="w-10 h-10 mr-5"
              onClick={handleHamburgerMenu}
            />
          )}
        </div>
      </nav>
    </header>
  );
}

export default Header;
