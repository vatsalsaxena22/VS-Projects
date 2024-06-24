import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import HtmlCss from "./components/HtmlCss";
import Js from "./components/Js";
import Reactjs from "./components/React";
import MERN from "./components/MERN";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/html-css" element={<HtmlCss />} />
        <Route path="/js" element={<Js />} />
        <Route path="/react" element={<Reactjs />} />
        <Route path="/mern" element={<MERN />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
