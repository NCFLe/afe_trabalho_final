import React from "react";
import './App.css';
import { ApplicationRoutes } from "./navigation/ApplicationRoutes";
import { BrowserRouter as Router } from "react-router-dom";
import ErrorBoundary from "./common/error/ErrorBoundary";
import  NavBar from "./common/components/NavBar";

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