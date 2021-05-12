
import React from 'react';
import ImageRow from './ImageRow.jsx';
class Gallery extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      selected: 0
    };
  }

  mouseHandler(index) {
    this.setState({selected: +index.currentTarget.dataset.index});
  }

  render() {
    console.log(this.state);
    return (
      <div className="imageBlock">
        <img src={this.props.images[this.state.selected]} />
        <div className="imageCaption">
          Click image to open expanded view
        </div>
        <ImageRow images={this.props.images} mouseHandler={(e) => this.mouseHandler(e)} selected={this.state.selected}/>
      </div>
    );
  }
}

export default Gallery;