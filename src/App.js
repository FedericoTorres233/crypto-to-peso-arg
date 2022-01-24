import { Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import About from "./pages/About";
import Footer from "./components/Footer";

import classes from "./App.module.css";

function App() {
  return (
    <div className={classes.grid}>
      <NavBar />
      <Routes>
        {/*Defines the routes*/}
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
