import { Component } from "react";

class Fetch1 extends Component {
  constructor(props) {
    super(props);
    console.log("3 constructor method");
  }
  componentDidMount() {
    console.log("1 componentDidMount");
  }
  render() {
    console.log("2 render");

    return (
      <div>
        <h2>{this.state}</h2>
      </div>
    );
  }
}

export default Fetch1;
