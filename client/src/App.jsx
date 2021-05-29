
import React from 'react';
import Gallery from './components/Gallery.jsx';
import Popover from './components/Popover.jsx';
import axios from 'axios';

const getCookie = function(cname) {
  var name = cname + '=';
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) === ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length);
    }
  }
  return 'localhost';
};

class App extends React.Component {
  constructor (props) {
    super(props);
    let productId = window.location.pathname.split('/').pop() || 1;
    this.state = {
      productId,
      images: [],
      overlayIsVisible: false,
      productName: ''
    };
    this.galleryip = getCookie('galleryip');
  }

  componentDidMount() {
    axios.get(`http://${this.galleryip}:3003/images/` + this.state.productId)
      .then(res => this.setState(res.data))
      .catch(console.error);

    axios.get(`http://${this.galleryip}:3002/overview/` + this.state.productId)
      .then(res => this.setState({productName: res.data.product_name}))
      .catch(console.error);
  }

  render() {
    return (
      <>
        <Gallery images={this.state.images} openHandler = {() => this.setState({overlayIsVisible: true})} />
        <Popover images={this.state.images} closeHandler = {() => this.setState({overlayIsVisible: false})} visible={this.state.overlayIsVisible} name={this.state.productName}></Popover>
      </>

    );
  }
}

export default App;