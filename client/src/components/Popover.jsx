
import React from 'react';
import ImageRow from './ImageRow.jsx';

class Popover extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      selected: 0,
    };
  }

  mouseHandler(index) {
    this.setState({selected: +index.currentTarget.dataset.index});
  }

  render() {
    const imageRows = [];

    for (let i = 0; i < this.props.images.length; i++) {
      const index = Math.floor(i / 4);
      if (!Array.isArray(imageRows[index])) {
        imageRows[index] = [];
      }
      imageRows[index].push(this.props.images[i]);
    }

    return (
      this.props.visible && <div className="overlay">
        <div className="popoverGallery">
          <div onClick={this.props.closeHandler} class="popoverClose">x</div>
          <div className="largeImage">
            <img src={this.props.images[this.state.selected]} />
          </div>
          <div className="imageColumn">
            {imageRows.map((images, offset) =>
              <ImageRow images={images} offset={offset * 4} mouseHandler={(e) => this.mouseHandler(e)} selected={this.state.selected}/>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Popover;