import { useState } from "react";

function SwitchCurrencies(props) {
  const initialState = 1;
  const [buttonValue, setButtonValue] = useState(initialState);

  const buttonHandler = () => {
    setButtonValue(buttonValue+1)
    props.changeButton(buttonValue+1);
    if (buttonValue>2){
      setButtonValue(initialState);
    }
  };
  return <button onClick={buttonHandler}>🔄</button>;
}

export default SwitchCurrencies;
