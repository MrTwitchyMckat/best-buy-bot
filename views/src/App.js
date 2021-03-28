import React, { Component } from 'react';
import Overlay from './components/overlay/overlay';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cardsLoaded: false,
      cards: [{"name":"butts"}]
    }
  }
  async componentDidMount() {
    setInterval(async () => {
      const response = await fetch('/data/cards/');
      const data = await response.json();
      this.setState({cardsLoaded: true, cards : data});
      console.log(this.state.cards);
    }, 3000);
  }
  componentDidUpdate(prevState) {
    if (this.state.cards !== prevState.cards) {
      console.log(this.state.cards);
    }
  }
  render() {
    return (
      <div>
        <Overlay cardsLoaded={this.state.cardsLoaded}/>
        {this.state.cards.map((item, id) => (
          <li key={id}>
            {item.name}
          </li>
        ))}
      </div>
    )
  }
}

export default App;