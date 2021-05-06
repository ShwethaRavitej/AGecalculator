import React, { Component } from "react";

export default class AgeInfoClass extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <h3>{this.props.date}</h3>
      </div>
    );
  }
}
