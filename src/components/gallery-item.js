import React, { Component } from 'react';

export default class GalleryItem extends Component {
  render() {
    var itemStyle = {
      height: '75%',
      width: '25%',
      float: 'left',
      margin: 'auto',
      padding: 6
    }
    return (
      <div>
        <img src={this.props.image} className="image" alt="logo" style={itemStyle} />
      </div>
    );
  }
}