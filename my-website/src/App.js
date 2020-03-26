import React from "react";
import "./App.css";
import { Router } from "@reach/router";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Header from "./components/Header";
import NavSite from "./components/NavSite";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Header />
      <NavSite />
      <Router>
        <Home path="/" />
        <Projects path="/projects" />
        <Contact path="/contact" />
      </Router>
    </div>
  );
}

export default App;
