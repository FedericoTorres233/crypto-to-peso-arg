import Screen from "../components/calculator/Screen";
import Input from "../components/calculator/Input";
import SwitchCurrencies from "../components/calculator/SwitchCurrencies";
import CurrentConversion from "../components/calculator/CurrentConversion";

function Home() {
  return (
    <div>
      <Screen /> {/* The screen of the calculator */}
      <Input /> {/* Where you enter the value */}
      <CurrentConversion />
      <SwitchCurrencies />
    </div>
  );
}

export default Home;
