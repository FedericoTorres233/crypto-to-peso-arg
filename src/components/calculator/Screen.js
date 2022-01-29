import CurrencyHandler from "./currencies/CurrencyHandler";

function Screen(props) {
  const SwitchCurrencies = (currency) => {
    switch (currency) {
      case 1:
        return "dai";
      case 2:
        return "btc";
      case 3:
        return "eth";
      default:
        return "dai";
    }
  };

  return (
    <div>
      <CurrencyHandler
        value={props.money}
        conversion={SwitchCurrencies(props.currency)}
      />
    </div>
  );
}

export default Screen;
