import { Link } from "react-router-dom";
import "./../index.css";
import { IoCloseOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { setHeaderMenu } from "../redux/slices/initialSlice";
import { FaGithub } from "react-icons/fa";

function DrawerMenu() {
  const statoHamburgerMenu = useSelector(
    (state) => state.statoIniziale.headerMenu
  );

  const dispatch = useDispatch();

  const handleHamburgerMenu = () => {
    dispatch(setHeaderMenu());
  };

  return (
    <>
      <div
        className={`dragger-menu ${
          statoHamburgerMenu ? "dragger-menu-open" : "dragger-menu-close"
        }`}
      >
        <div className="bg-color-header-dragger-menu flex justify-end">
          <IoCloseOutline
            className="w-14 h-14 mr-4 mt-5 text-white"
            onClick={handleHamburgerMenu}
          />
        </div>
        <hr className="mx-8" />
        <div className="flex flex-col justify-center items-center mt-6">
          <Link
            onClick={handleHamburgerMenu}
            to="/"
            className="links-style"
            aria-label="Vai alla homepage"
            title="Home"
          >
            Home
          </Link>
          <Link
            onClick={handleHamburgerMenu}
            to="/chisiamo"
            className="links-style"
            aria-label="Vai alla sezione chisiamo"
            title="chi siamo"
          >
            ChiSiamo
          </Link>
          <Link
            onClick={handleHamburgerMenu}
            to="/contatti"
            className="links-style"
            aria-label="Vai alla sezione contatti"
            title="contatti"
          >
            Contatti
          </Link>
        </div>
        <hr className="mx-8" />
        <div className="absolute bottom-2 left-4 right-4 flex flex-col justify-center">
          <span className="copyright-message text-center my-4 text-sm text-white">
            © 2024 Stefan Hritcu. Tutti i diritti riservati.
          </span>

          <a
            href="https://github.com/StefanHritcu/OpenSoundHub-Collaborative-Full-Stack-Audio-Processing-Platform"
            target="_blank"
            aria-label="Vai alla repository su github del progetto"
            title="Repository Github del progetto"
            className="flex justify-center mt-4"
          >
            <FaGithub className="margin-github-link  text-white w-10 h-10" />
          </a>
        </div>
      </div>
    </>
  );
}

export default DrawerMenu;
