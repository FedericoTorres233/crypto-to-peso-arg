import { useState } from "react";

function CurrencyHandler(props) {
  const [value, setValue] = useState("0");
  let currencyAPI = "";
  switch (props.conversion) {
    case "btc":
      currencyAPI =
        "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=ars";
      break;
    case "eth":
      currencyAPI =
        "https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=ars";
      break;
    case "dai":
      currencyAPI =
        "https://api.coingecko.com/api/v3/simple/price?ids=dai&vs_currencies=ars";
      break;

    default:
      currencyAPI =
        "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd";
      break;
  }
  fetch(currencyAPI)
    .then((response) => response.json())
    .then((data) => {
      setValue(
        Math.round(
          Object.values(data)[0].ars * 2.15 * (props.value > 0 ? props.value : 0)
        )
      );
    })
    .catch((error) => console.log(error));

  return (
    <div>
      {props.value ? props.value : 0} <strong>{props.conversion}</strong> ={" "}
      {value} <strong>AR$</strong>
    </div>
  );
}

export default CurrencyHandler;
