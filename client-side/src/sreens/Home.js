import React, { Component } from "react";
import Screen from "../components/Screen";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount(){}
  componentDidUpdate(){}

  render(){
    
    //   Render Home Screen
      return(<Screen title="Home"></Screen>)
  }
}

export default Home;
