import Screen from "../components/calculator/Screen";
import Input from "../components/calculator/Input";
import SwitchCurrencies from "../components/calculator/SwitchCurrencies";
import CurrentConversion from "../components/calculator/CurrentConversion";

import classes from "./Home.module.css";

function Home() {
  return (
    <div className={classes.bg}>
      <div className={classes.calculator}>
        <Screen /> {/* The screen of the calculator */}
        <Input /> {/* Where you enter the value */}
        <CurrentConversion />
        <SwitchCurrencies />
      </div>
    </div>
  );
}

export default Home;
