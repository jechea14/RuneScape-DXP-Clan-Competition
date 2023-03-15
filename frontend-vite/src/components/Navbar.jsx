import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header>
      <div>
        <Link to="/">
          <h1>Elite Team Killerz</h1>
        </Link>
      </div>
    </header>
  );
}

export default Navbar;
