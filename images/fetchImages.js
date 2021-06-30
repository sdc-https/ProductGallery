const download = require('image-downloader');
const axios = require('axios');
const fs = require('fs');
const url = 'https://loremflickr.com/320/240/dogs';

const options = {
  url: 'https://loremflickr.com/320/240',
  dest: '/Users/owner/sdc/ProductGallery/images/repository'
}

const fetchImages = async (n) => {
  for (let i = 0; i < n; i++) {
    await axios.get(url, {responseType: 'stream'})
    .then(async (res) => {
      // image-downloader call
      await download.image({
        url: res.data.responseUrl,
        dest: '/Users/owner/sdc/ProductGallery/images/repository'
      })
        .then(() => {
          console.log(`${i + 1} images downloaded.`)
        })
        .catch((err, res) => {
          console.log(err);
        })
        })
  }
}
fetchImages(1000);

