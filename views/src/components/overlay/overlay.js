import React, { Component } from 'react';
import './overlay.scss';

class Overlay extends Component {
  render() {
    if (this.props.cardsLoaded === false) {
      return (
        <div className="overlay">
          <p>LOADING CARDS</p>
          <div className="lds-dual-ring"></div>
        </div>
      )
    } else {
      return (<div></div>)
    }
  }
}
export default Overlay;