import React, { Component } from "react";

class BoxClass extends Component {
  constructor(props) {
    super(props);
    let result;

    if (
      props.title === "Computer" &&
      props.result !== "tie" &&
      props.result !== ""
    ) {
      result = props.result === "win" ? "lose" : "win";
    } else {
      result = props.result;
    }
    if (props.title === "Computer") {
      console.log("computer", result);
    }

    this.state = {
      result: result
    };
  }

  render() {
    const { title, item } = this.props;
    return (
      <div className={`box ${this.state.result}`}>
        <h1>{title}</h1>
        <h2 data-testid="item-name">{item && item.name}</h2>
        <img className="item-img" src={item && item.img} />
        <h1>{this.state.result}</h1>
      </div>
    );
  }
}

export default BoxClass;
