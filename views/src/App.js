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
      <div className="container">
        <div className="card header">
          <div className="card__link" href="https://www.bestbuy.com/site/nvidia-geforce-rtx-3080-10gb-gddr6x-pci-express-4-0-graphics-card-titanium-and-black/6429440.p?skuId=6429440">
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
          <Card card={item}/>
        ))}
      </div>
    )
  }
}

export default App;