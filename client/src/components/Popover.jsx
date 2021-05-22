
import React from 'react';
import ImageRow from './ImageRow.jsx';

class Popover extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      selected: props.selected || 0,
    };
    this.imageContainer = React.createRef();
    this.popover = React.createRef();
    this.image = React.createRef();
  }

  mouseHandler(index) {
    this.setState({selected: +index.currentTarget.dataset.index});
  }

  moveHandler(e) {
    const imageContainer = this.imageContainer.current;
    const image = this.image.current;
    const popover = this.popover.current;
    let containerHeight = imageContainer.offsetHeight;
    let containerWidth = imageContainer.offsetWidth;
    let yZoom = image.naturalHeight > containerHeight;
    let xZoom = image.naturalWidth > containerWidth;
    imageContainer.classList.toggle('zoomable', xZoom || yZoom);
    if (!imageContainer.classList.contains('zoomed')) {
      return;
    }
    let marginTop = 0;
    let marginLeft = 0;
    if (yZoom) {
      let y = e.clientY - (popover.offsetTop + imageContainer.offsetTop);
      let percentage = image.offsetHeight - containerHeight;
      let range = (( y / containerHeight ) - 0.25) * 2;
      range = range < 0 ? 0 : range > 1 ? 1 : range;
      marginTop = percentage - (2 * range * percentage) + 'px';
    }
    if (xZoom) {
      let x = e.clientX - (popover.offsetLeft + imageContainer.offsetLeft);
      let percentage = image.offsetWidth - containerWidth;
      let range = (( x / containerWidth ) - 0.25) * 2;
      range = range < 0 ? 0 : range > 1 ? 1 : range;
      marginLeft = percentage - (2 * range * percentage) + 'px';
    }
    image.style.margin = marginTop + ' 0 ' + '0 ' + marginLeft;
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
        <div ref={this.popover} className="popoverGallery" onMouseMove={(e) => this.moveHandler(e)}>
          <button onClick={this.props.closeHandler} className="popoverClose">×</button>
          <div ref={this.imageContainer} className="largeImage" onClick={(e) => {
            let imageContainer = this.imageContainer.current;
            if (imageContainer.classList.contains('zoomable')) {
              imageContainer.classList.toggle('zoomed');
              if (!imageContainer.classList.contains('zoomed')) {
                this.image.current.style.margin = 0;
              }
              this.moveHandler(e);
            }
          }}>
            <img ref={this.image} src={this.props.images[this.state.selected]} />
          </div>
          <div className="imageColumn">
            <div className="imageColumnTitle">{this.props.name}</div>
            {imageRows.map((images, offset) =>
              <ImageRow images={images} key={offset} offset={offset * 4} mouseHandler={() => {}} clickHandler={(e) => this.mouseHandler(e)} selected={this.state.selected}/>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Popover;