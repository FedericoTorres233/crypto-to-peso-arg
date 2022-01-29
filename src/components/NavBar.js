import { Link } from "react-router-dom";

import classes from "./NavBar.module.css"

function NavBar() {
  return (
    <header>
      <h1>Crypto to Argentine Peso</h1>
      <h2>A simple web to convert cryptocurrencies into Argentine Pesos</h2>
      <ul className={classes.all}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </header>
  );
}

export default NavBar;
