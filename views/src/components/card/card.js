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
  mapStock(stock) {
    if(stock === true) {
      return "In Stock"
    } else {
      return "Out of Stock"
    }
  }
  render() { 
    return (
      <div className={this.props.card.instock ? 'card in-stock' : 'card'}>
        <a className="card__link" target="_blank" rel="norefferer nofollow" href={this.props.card.url}>
          <div className="card__title">
           {this.props.card.name}
          </div>
          <div className="card__location">
            <img src={this.mapLogos(this.props.card.vendor)} />
          </div>
          <div className="card__stock">
            {this.mapStock(this.props.card.instock)}
          </div>
          <div className="card__updated">
            {this.props.card.updated}
          </div>
        </a>
      </div>
    )
  }
}

export default Card;