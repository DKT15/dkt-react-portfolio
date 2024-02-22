import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import Carousel from "./components/Carousel";

function App() {
  return (
    <div>
      <Navbar />
      <Jumbotron />
      <Carousel />
    </div>
  );
}

export default App;
