import React, { Component } from "react";
import BoxClass from "./BoxClass";
export default class AppClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userSelect: null,
      computerSelect: null,
      result: null
    };
    this.choice = {
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
    this.increment = this.increment.bind(this);
    this.play = this.play.bind(this);
    this.randomChoice = this.randomChoice.bind(this);
    this.judgement = this.judgement.bind(this);
  }

  increment() {
    this.setState({
      counter2: this.state.counter2 + 1,
      value: this.state.value + 1
    });
  }

  play(userChoice) {
    this.setState({ userSelect: this.choice[userChoice] });
    const computerChoice = this.randomChoice();
    this.setState({ computerSelect: computerChoice });
    const result = this.judgement(this.choice[userChoice], computerChoice);
    this.setState({ result: result });
  }
  //랜덤한 숫자
  randomChoice() {
    const itemArray = Object.keys(this.choice); //객체에ㅔ 키값만 뽑아서 배열로 만들어 준다.
    console.log("item array", itemArray);
    // 랜덤한 아이템 선택 로직 구현
    const randomItem = itemArray[Math.floor(Math.random() * itemArray.length)];
    const final = this.choice[randomItem];
    console.log("final", final);

    return final;
  }

  judgement(user, computer) {
    if (user.name === computer.name) {
      return "tie";
    } else if (user.name === "Rock") {
      return computer.name === "Scissors" ? "win" : "lose";
    } else if (user.name === "Scissors") {
      return computer.name === "Paper" ? "win" : "lose";
    } else if (user.name === "Paper") {
      return computer.name === "Rock" ? "win" : "lose";
    }
  }
  render() {
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
