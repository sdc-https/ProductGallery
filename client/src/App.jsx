
import React from 'react';
import Gallery from './components/Gallery.jsx';
import Popover from './components/Popover.jsx';
import axios from 'axios';
class App extends React.Component {
  constructor (props) {
    super(props);
    let productId = window.location.pathname.split('/').pop() || 1;
    this.state = {
      productId,
      images: [],
      overlayIsVisible: false
    };
  }

  componentDidMount() {
    axios.get('http://localhost:3003/images/' + this.state.productId)
      .then(res => this.setState(res.data))
      .catch(console.error);
  }

  render() {
    return (
      <>
        <Gallery images={this.state.images} openHandler = {() => this.setState({overlayIsVisible: true})} />
        <Popover images={this.state.images} closeHandler = {() => this.setState({overlayIsVisible: false})} visible={this.state.overlayIsVisible} ></Popover>
      </>

    );
  }
}

export default App;