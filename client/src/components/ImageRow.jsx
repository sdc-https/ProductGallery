
import React from 'react';

class ImageRow extends React.Component {

  render() {
    let offset = this.props.offset || 0;
    return (
      <ul className="imageRow">
        {this.props.images.map((image, index) => (
          index < 4 && <li onMouseEnter={this.props.mouseHandler} onClick={this.props.clickHandler} data-index={index + offset} key={index + offset} className={this.props.selected === (index + offset) ? 'selected' : ''}><img src={image} /></li>
        )
        )}
      </ul>
    );
  }
}

export default ImageRow;