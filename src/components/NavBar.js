import { Link } from "react-router-dom";

import classes from "./NavBar.module.css";

function NavBar() {
  return (
    <header className={classes.all}>
      <h1 className={classes.h1}>Crypto to Argentine Peso</h1>
      <h2>A simple web to convert cryptocurrencies into Argentine Pesos</h2>
      <ul className={classes.ul}>
        <li className={classes.li}>
          <Link className={classes.a} to="/">
            Home
          </Link>
        </li>
        <li className={classes.li}>
          <Link className={classes.a} to="/about">
            About
          </Link>
        </li>
      </ul>
    </header>
  );
}

export default NavBar;
