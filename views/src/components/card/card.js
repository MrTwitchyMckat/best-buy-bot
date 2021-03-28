import React, { Component } from 'react';
import './card.scss';

// Import logos
import bestbuy from '../../logos/bestbuy.png';
import amd from '../../logos/amd.png';
import newegg from '../../logos/newegg.png';

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  mapLogos(vendor) {
    if(vendor === 'bestbuy') {
      return bestbuy;
    }
    if(vendor === 'amd') {
      return amd;
    }
    if(vendor === 'newegg') {
      return newegg;
    }
  }
  render() {
    console.log(this.props.card)
    return (
      <div className="card">
        <div className="card__link" href={this.props.card.instock}>
          <div className="card__title">
           {this.props.card.name}
          </div>
          <div className="card__location">
            <img src={this.mapLogos(this.props.card.vendor)} />
          </div>
          <div className="card__stock">
            {this.props.card.instock}
          </div>
          <div className="card__updated">
            {this.props.card.updated}
          </div>
        </div>
      </div>
    )
  }
}

export default Card;