import React from "react";
import './App.css';
import { ApplicationRoutes } from "./navigation/ApplicationRoutes";
import ErrorBoundary from "./common/error/ErrorBoundary";
import  NavBar from "./common/components/NavBar";
import T from 'tachyons'

function App() {

  return (
    <ErrorBoundary>
      <div className="App">
            <NavBar />
          <ApplicationRoutes />
      </div>
    </ErrorBoundary>
  );
}

export default App;