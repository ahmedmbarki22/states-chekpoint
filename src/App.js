import React, { Component } from "react";
import "./App.css";
import Profile from "./Profile";

class App extends Component {
  state = {
   
    show: false,
  
  };

  toggleShow = () => {
    this.setState((prevState) => ({
      show: !prevState.show,
    }));
  };

  render() {
    

    return (
      <div className="App-list">
        <button className="button" onClick={this.toggleShow}>
          {this.state.show ? "Hide Profile" : "Show Profile"}
        </button>
        {this.state.show && <Profile />}
      </div>
    );
  }
}

export default App;
