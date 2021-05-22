
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
    return (
      <div className="imageBlock">
        <img src={this.props.images[this.state.selected]} onClick={this.props.openHandler} />
        <div className="imageCaption">
          Click image to open expanded view
        </div>
        <ImageRow images={this.props.images} mouseHandler={(e) => this.mouseHandler(e)} clickHandler={() => {}} selected={this.state.selected}/>
      </div>
    );
  }
}

export default Gallery;