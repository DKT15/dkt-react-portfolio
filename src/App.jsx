import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";

//Gets code from the components and pages.
function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/" element={<Jumbotron />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
