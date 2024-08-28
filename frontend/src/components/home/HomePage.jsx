import { Link } from "react-router-dom";

function HomePage() {
  return (
    <>
      <div>
        <h1>Home</h1>
        <Link to="generateaudio">Genera audio</Link>
      </div>
    </>
  );
}
export default HomePage;
