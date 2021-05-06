import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./Header";
import Age from "./Age";

function App() {
  return (
    <div className="App">
      <Header />

      <div></div>
      <h1 className="age">Age Teller Game</h1>
      <Age />
    </div>
  );
}

export default App;
