import CurrencyHandler from "./currencies/CurrencyHandler";

function Screen() {
  return (
    <div>
      <CurrencyHandler conversion="dai" />
    </div>
  );
}

export default Screen;
