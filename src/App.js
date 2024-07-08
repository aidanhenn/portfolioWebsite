import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import Home from "./components/pages/Home";
import ContactMe from "./components/pages/ContactMe";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/contact-me" element={<ContactMe />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
