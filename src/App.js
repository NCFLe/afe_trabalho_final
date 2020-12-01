import React from "react";
import './App.css';
import { ApplicationRoutes } from "./movies/ApplicationRoutes";
import { BrowserRouter as Router, Link } from "react-router-dom";
import ErrorBoundary from "./ErrorBoundary";

function App() {

  return (
    <ErrorBoundary>

      <div className="App">
        <h1>Movie Max</h1>
        <Router>
          <div>
            <Link to="/">Início </Link>
          </div>
          {/* <Link to="/Movies">Filmes </Link> */}
          <ApplicationRoutes />
        </Router>
      </div>
    </ErrorBoundary>
  );
}

export default App;