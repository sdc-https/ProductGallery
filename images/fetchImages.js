const download = require('image-downloader');
const axios = require('axios');
const fs = require('fs');
const url = 'https://loremflickr.com/320/240/dogs';

const options = {
  url: 'https://loremflickr.com/320/240',
  dest: '/Users/owner/sdc/ProductGallery/images/repository'
}

axios.get(url, {responseType: 'stream'})
.then((res) => {
  console.log(res.status)
  console.log(res.data.responseUrl);
  // image-downloader call
  return download.image({
    url: res.data.responseUrl,
    dest: '/Users/owner/sdc/ProductGallery/images/repository'
  })
    .then(() => {
      console.log('image saved');
    })
    .catch((err, res) => {
      console.log(err);
    })
    })
