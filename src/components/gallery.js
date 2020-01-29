import React, { Component } from 'react';
import dorian from '../images/dorian_gray.jpg';

export default class Gallery extends Component {
  render() {
    var galleryStyle = {
      height: '25%',
      width: '15%',
      display: 'inline-block',
      margin: 'auto'
    }
    return (
      <div>
        <img src={dorian} className="dorian gray" alt="logo" style={galleryStyle} />
      </div>
    );
  }
}