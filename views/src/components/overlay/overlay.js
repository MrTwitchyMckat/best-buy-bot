import React, { Component } from 'react';
import './overlay.css';

class Overlay extends Component {
  render() {
    if (this.props.cardsLoaded == false) {
      return (
        <div className="overlay">
          <p>LOADING CARDS</p>
          <div class="lds-dual-ring"></div>
        </div>
      )
    } else {
      return (<div></div>)
    }
  }
}
export default Overlay;