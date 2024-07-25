import React, { Component } from "react";
import BoxClass from "./BoxClass";
import "./App.css";
const choice = {
  rock: {
    name: "Rock",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAxL1231cJvvm3a7E3HN8Mmyej3YoreJbcMg&s"
  },
  scissors: {
    name: "Scissors",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFgjYmdf7JL7QqunSEhwetzzgXOxGJr9nx6w&s"
  },
  paper: {
    name: "Paper",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPmvDzIfJNpT_YiYFCS6dLNNZEeoohW_qlyw&s"
  }
};
export default class AppClass extends Component {
  constructor() {
    super();

    this.state = {
      userSelect: null,
      computerSelect: null,
      result: ""
    };
    console.log("constructor", constructor);
  }

  play = (userChoice) => {
    let computerChoice = this.randomChoice();
    this.setState({
      userSelect: choice[userChoice],
      computerSelect: computerChoice,
      result: this.judgement(choice[userChoice], computerChoice)
    });
    console.log("increase function", this.setState);
  };
  //랜덤한 숫자

  // 랜덤한 아이템 선택 로직 구현
  // Update the randomChoice method in AppClass component
  randomChoice = () => {
    let itemArray = Object.keys(choice); //객체에 키값만 뽑아서 어레이 함수
    let randomItem = Math.floor(Math.random() * itemArray.length);
    let final = itemArray[randomItem];
    return choice[final];
  };
  judgement = (user, computer) => {
    if (user.name === computer.name) {
      return "tie";
    } else if (user.name === "Rock") {
      return computer.name === "Scissors" ? "win" : "lose";
    } else if (user.name === "Scissors") {
      return computer.name === "Paper" ? "win" : "lose";
    } else if (user.name === "Paper") {
      return computer.name === "Rock" ? "win" : "lose";
    }
  };
  componentDidMount() {
    //apicall
    console.log("componentDidMount");
  }

  componentDidUpdate() {
    console.log("componentDidUpdate", this.state);
  }
  render() {
    console.log("render");
    return (
      <div>
        <div className="stars"></div>
        <div className="main">
          <BoxClass
            title="You"
            item={this.state.userSelect}
            result={this.state.result}
          />
          <BoxClass
            title="Computer"
            item={this.state.computerSelect}
            result={this.state.result}
          />
        </div>
        <div className="main">
          <button
            onClick={() => this.play("scissors")}
            className="hands_button"
          >
            <img
              className="hands_scissors"
              src="scissors.png"
              alt="Scissors icon"
              title="가위 바위 보 아이콘 제작자: Cap Cool - Flaticon"
            />
          </button>
          <button onClick={() => this.play("rock")} className="hands_button">
            <img
              className="hands"
              src="rock.png"
              alt="Rock icon"
              title="주먹 아이콘 제작자: Freepik - Flaticon"
            />
          </button>
          <button onClick={() => this.play("paper")} className="hands_button">
            <img
              className="hands"
              src="paper.png"
              alt="Paper icon"
              title="가위 바위 보 아이콘 제작자: iconading - Flaticon"
            />
          </button>
        </div>
      </div>
    );
  }
}
