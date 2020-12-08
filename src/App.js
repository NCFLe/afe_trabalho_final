import React from "react";
import './App.css';
import { ApplicationRoutes } from "./movies/ApplicationRoutes";
import { BrowserRouter as Router } from "react-router-dom";
import ErrorBoundary from "./ErrorBoundary";
import  NavBar from "./NavBar";

function App() {

  return (
    <ErrorBoundary>
      <div className="App">
        <Router>
            <NavBar />
          <ApplicationRoutes />
        </Router>
      </div>
    </ErrorBoundary>
  );
}

export default App;