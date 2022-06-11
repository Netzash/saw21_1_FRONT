import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import WikidataList from "./components/WikidataList";

function App() {
  return (
    <div className="container">
      <nav className="navbar navbar-expand navbar-white bg-white navcontainer">
        <a href="/tutorials" className="navbar-brand">
          <img width="350" src="https://www.mti.cl/wp-content/uploads/2021/12/logousm.png" className="attachment-large size-large" alt="" loading="lazy" srcSet="https://www.mti.cl/wp-content/uploads/2021/12/logousm.png 561w, https://www.mti.cl/wp-content/uploads/2021/12/logousm-300x52.png 300w" sizes="(max-width: 561px) 100vw, 561px"></img>
        </a>
        <div className="navbar-nav float-right">
          <li className="nav-item">
              MTI - Sistema de Aplicaciones Web SAW 21 - Grupo 1
          </li>
        </div>
      </nav>

      <div className="container mt-3">
        <Routes>
          <Route path="/" element={<WikidataList/>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
