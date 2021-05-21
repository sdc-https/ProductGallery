
import React from 'react';
import Gallery from './components/Gallery.jsx';
import axios from 'axios';
class App extends React.Component {
  constructor (props) {
    super(props);
    let productId = new URL(window.location).pathname.split('/').pop() || 1;
    this.state = {
      productId,
      images: []
    };
  }
  componentDidMount() {
    axios.get('/images/' + this.state.productId)
      .then(res => this.setState(res.data))
      .catch(console.error);
  }

  render() {
    return (
      <Gallery images={this.state.images} />
    );
  }
}

export default App;