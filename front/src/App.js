import React from "react";
import Nav from "./components/Nav";
import Routes from "./Routes";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div>
      <Nav />
      <Routes />
    </div>
  );
}

export default App;
