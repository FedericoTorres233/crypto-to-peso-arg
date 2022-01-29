import Screen from "../components/calculator/Screen";
import SwitchCurrencies from "../components/calculator/SwitchCurrencies";

import classes from "./Home.module.css";
import { useState } from "react";

function Home() {
  const [formValue, setFormValue] = useState();
  const [buttonValue, setButtonValue] = useState();

  const changeHandler = (form) => {
    form.preventDefault();
    setFormValue(form.target.value);
  };

  return (
    <div className={classes.bg}>
      <div className={classes.calculator}>
        <Screen money={formValue} currency={buttonValue}/> {/* The screen of the calculator */}
        <input
          type="number"
          name="input"
          value={formValue}
          placeholder="Enter the pesos"
          onChange={changeHandler}
        ></input>
        <SwitchCurrencies changeButton={setButtonValue}/>
      </div>
    </div>
  );
}

export default Home;
