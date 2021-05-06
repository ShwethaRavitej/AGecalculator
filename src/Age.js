import React, { Component } from "react";
import AgeIinfo from "./AgeInfo";

class Age extends Component {
  state = {
    birthday: "2017-01-01",
    name: "GUEST",
    showStats: false
  };
  // componentDidMount = () => {
  //     var username  = prompt('Please enter your name');
  //     this.setState({name:username})
  //  }
  changeBirthday = (event) => {
    // alert('clicked change birthday function' );
    this.setState({ birthday: event.target.value, showStats: true });
  };
  getName = () => {
    var username = prompt("Please enter your name");
    this.setState({ name: username });
  };
  render() {
    return (
      <div>
        <h1>Welcome {this.state.name}</h1>
        <h1>Please click on the button below to enter your name</h1>
        <button onClick={this.getName}>Enter Name</button>
        {/* Input field added */}
        <h2>Please enter your birthdate</h2>
        <input
          type="date"
          value={this.state.birthday}
          onChange={this.changeBirthday}
        />
        {this.state.showStats ? (
          <div className="fades age-stats">
            <AgeIinfo date={this.state.birthday} />
          </div>
        ) : (
          <div></div>
        )}
      </div>
    );
  }
}
export default Age;
