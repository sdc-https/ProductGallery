
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
      images: {
        thumbnails: [],
        main: [],
        original: []
      },
      overlayIsVisible: false,
      productName: ''
    };
    this.galleryip = env.GALLERY_IP || localhost;
    this.overviewip = env.OVERVIEW_IP || localhost;
    this.preloadedOriginal = false;
  }

  preloadImages(images) {
    const makeLink = function(url) {
      const link = document.createElement('link');
      link.href = url;
      link.rel = 'preload';
      link.as = 'image';
      document.getElementsByTagName('head')[0].appendChild(link);
    };
    images.forEach(makeLink);
  }

  componentDidMount() {
    axios.get(`http://${this.galleryip}:3003/images/` + this.state.productId)
      .then(res => {
        this.setState(res.data);
        this.preloadImages(res.data.images.main);
        this.preloadImages(res.data.images.thumbnails);
        this.preloadImages([res.data.images.original[0]]);
      })
      .catch(err => {
        if (err.response) {
          console.error(err.response);
        } else {
          console.error(err.message + ' - image API could not be reached', err.config);
        }
      });

    axios.get(`http://${this.overviewip}:3002/overview/` + this.state.productId)
      .then(res => this.setState({productName: res.data.product_name}))
      .catch(err => {
        if (err.response) {
          console.error(err.response);
        } else {
          console.error(err.message + ' - overview API could not be reached', err.config);
        }
      });
  }



  render() {
    return (
      <>
        <Gallery images={this.state.images} openHandler = {() => {
          if (this.preloadedOriginal === false) {
            this.preloadImages(this.state.images.original.slice(1));
          }
          this.setState({overlayIsVisible: true});
        }} />
        <Popover images={this.state.images} closeHandler = {() => this.setState({overlayIsVisible: false})} visible={this.state.overlayIsVisible} name={this.state.productName}></Popover>
      </>

    );
  }
}

export default App;