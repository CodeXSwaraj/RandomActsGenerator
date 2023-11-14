const ActsOfKindness = [
  "Compliment a stranger and brighten their day.",
  "Buy a coffee for the person behind you in line.",
  "Plant a tree in your neighborhood.",
  // Add more acts of kindness as needed
];

class RandomActsGenerator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      randomAct: "",
    };
  }

  generateRandomAct = () => {
    const randomIndex = Math.floor(Math.random() * ActsOfKindness.length);
    this.setState({ randomAct: ActsOfKindness[randomIndex] });
  };

  render() {
    return (
      <div>
        <h1>Random Acts of Kindness Generator</h1>
        <button onClick={this.generateRandomAct}>Generate Random Act</button>
        {this.state.randomAct && <p>{this.state.randomAct}</p>}
      </div>
    );
  }
}

ReactDOM.render(<RandomActsGenerator />, document.getElementById("app"));
