import React, { Component } from 'react';
import GalleryItem from './gallery-item'
import dorian from '../images/dorian_gray.jpg';
import monet from '../images/jeune-fille-dans-le-jardin-de-giverny-claude-monet.jpg';
import starwars from '../images/revenge_of_jedi.jpg';
//TODO use npm install recursive-readdir to parse image folder instead of hard-coding

export default class Gallery extends Component {
  render() {
    var galleryStyle = {
      height: '85%',
      width: '85%',
      margin: 'auto',
      padding: 6
    }
    return (
      <div className="App" style={galleryStyle}  >
        <GalleryItem image={dorian} />
        <GalleryItem image={monet} />
        <GalleryItem image={starwars} />
      </ div>
    );
  }
}