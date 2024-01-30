import React, { Component } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { Routes, Route, Link } from "react-router-dom";

import AddTutorial from "./components/add-tutorial.component";
import Tutorial from "./components/tutorial.component";
import LogssList from "./components/tutorials-list.component";
import Data from "./components/data.component";
//import DataList from "./components/data.component";

class App extends Component {
  render() {
    return (
      <div>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <a href="/tutorials" className="navbar-brand">
            iLogbook
          </a>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/tutorials"} className="nav-link">
                Logbook Entries
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/data"} className="nav-link">
                Data Entries
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/add"} className="nav-link">
                Add
              </Link>
            </li>
          </div>
        </nav>

        <div className="container mt-3">
          <Routes>
            <Route path="/" element={<LogsList/>} />
            <Route path="/logs" element={<LogsList/>} />
            <Route path="/data" element={<Data/>} />
            <Route path="/add" element={<AddLog/>} />
            <Route path="/tutorials/:id" element={<Log/>} />
          </Routes>
        </div>
      </div>
    );
  }
}

export default App;