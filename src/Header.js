import React, { Component } from "react";

export default class Header extends Component {
  clicked() {
    alert("Clicked from class component");
  }
  render() {
    var name = "Coding Hero";
    return (
      <div>
        <h1 className="head">Hello World</h1>
        <h2>Welcome {name}</h2>
      </div>
    );
  }
}
