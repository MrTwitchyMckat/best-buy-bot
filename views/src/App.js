import React, { Component } from 'react';
import Overlay from './components/overlay/overlay';
import Card from './components/card/card';
import './App.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cardsLoaded: false,
      cards: [{"name":"laoding", "url":"loading", "vendor":"loadinng","instock":false, "updated":"loading"}]
    }
  }
  async componentDidMount() {
    setInterval(async () => {
      const response = await fetch('/data/cards.json');
      const data = await response.json();
      this.setState({cardsLoaded: true, cards : data});
      console.log(this.state.cards);
    }, 5000);
  }
  componentDidUpdate(prevState) {
    if (this.state.cards !== prevState.cards) {
      console.log(this.state.cards);
    }
  }
  render() {
    return (
      <div className="container">
        <div className="card header">
          <div className="card__link">
            <div className="card__title">
            Card Name
            </div>
            <div className="card__location">
              Card Location
            </div>
            <div className="card__stock">
              Inventory
            </div>
            <div className="card__updated">
              Updated At
            </div>
          </div>
        </div>
        <Overlay cardsLoaded={this.state.cardsLoaded}/>
        {this.state.cards.map((item, id) => (
          <Card card={item} id={id}/>
        ))}
      </div>
    )
  }
}

export default App;