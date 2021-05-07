
import React from 'react';

class Gallery extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      selected: 0
    };
  }

  render() {
    return (
      <div class="imageBlock">
        <img src={this.props.images[this.state.selected]} />
        <div className="imageCaption">
          Click image to open expanded view
        </div>
        <ul class="altImages">
          {this.props.images.map((image, index) => (
            <li className={this.state.selected === index && 'selected'}><img src={image} /></li>
          )
          )}
        </ul>
      </div>
    );
  }
}

export default Gallery;