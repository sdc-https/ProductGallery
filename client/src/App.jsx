import React from 'react';
import Gallery from './components/Gallery.jsx';
import Popover from './components/Popover.jsx';
import axios from 'axios';
import config from '../../config.js';


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
    this.proxyip = config.proxyHost || 'localhost';
    this.overviewip = config.overviewHost;
  }

  componentDidMount() {
    axios.get(`http://${this.proxyip}/images/` + this.state.productId)
      .then(res => this.setState(res.data))
      .catch(err => {
        if (err.response) {
          console.error(err.response);
        } else {
          console.error(err.message + ' - image API could not be reached', err.config);
        }
      });

    axios.get(`http://${this.overviewip}/overview/` + this.state.productId)
      .then(res => this.setState({productName: res.data.product_name}))
      .catch(err => {
        if (err.response) {
          console.error(err.response);
        } else {
          console.error(err.message + ' - overview API could not be reached', err.config);
        }
      });
      console.log('state log:', this.state)
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