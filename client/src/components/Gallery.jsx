
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
      <div className="imageBlock">
        <img src={this.props.images[this.state.selected]} />
        <div className="imageCaption">
          Click image to open expanded view
        </div>
        <ul className="altImages">
          {this.props.images.map((image, index) => (
            <li key={index} className={this.state.selected === index ? 'selected' : ''}><img src={image} /></li>
          )
          )}
        </ul>
      </div>
    );
  }
}

export default Gallery;