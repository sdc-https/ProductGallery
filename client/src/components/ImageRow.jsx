
import React from 'react';

class ImageRow extends React.Component {

  render() {
    return (
      <ul className="imageRow">
        {this.props.images.map((image, index) => (
          <li onMouseOver={(e) => this.props.mouseHandler(e)} data-index={index} key={index} className={this.props.selected === index ? 'selected' : ''}><img src={image} /></li>
        )
        )}
      </ul>
    );
  }
}

export default ImageRow;