const download = require('image-downloader');
const axios = require('axios');
const fs = require('fs');
const url = 'https://loremflickr.com/';
const sizes = [768, 1280, 900];
const tags = ['tech', 'animals', 'arch', 'people', 'nature', 'dogs', 'paris'];
const images = [];

const fetchImages = async (n) => {
  var id = 0;
  for (let i = 0; i < n; i++) {
    id++;
    const width = sizes[Math.round(Math.random() * (sizes.length - 1))];
    const height = sizes[Math.round(Math.random() * (sizes.length - 1))];
    const tagIndex = Math.round(Math.random() * (tags.length - 1));
    await axios.get(url + width + '/' + height + '/' + tags[tagIndex] + '?lock=' + id, {
      responseType: 'stream'
    })
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
fetchImages(200);

