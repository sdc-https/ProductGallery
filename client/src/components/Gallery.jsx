
import React from 'react';

class Gallery extends React.Component {
  render() {
    return (
      <div class="imageBlock">
        <img src="https://placeimg.com/360/480/tech" />
        <div class="imageCaption">
          Click image to open expanded view
        </div>
        <ul class="altImages">
          <li class="selected"><img src="https://placeimg.com/360/480/tech" /></li>
          <li><img src="https://placeimg.com/360/480/animals" /></li>
          <li><img src="https://placeimg.com/480/360/arch" /></li>
        </ul>
      </div>
    );
  }
}

export default Gallery;