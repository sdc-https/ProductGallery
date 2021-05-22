const db = require('./index.js');
const axios = require('axios');

let products = 100;
let count = 0;
const generateImages = (size = 0, id = 0) => {
  const url = 'https://loremflickr.com/';
  const sizes = [768, 1280, 900];
  const tags = ['tech', 'animals', 'arch', 'people', 'nature'];
  const images = [];
  for (let i = 0; i < size; i++) {
    const width = sizes[Math.round(Math.random() * (sizes.length - 1))];
    const height = sizes[Math.round(Math.random() * (sizes.length - 1))];
    const tagIndex = Math.round(Math.random() * (tags.length - 1));
    const lockIndex = Math.floor(Math.random() * 1000);
    images.push(url + width + '/' + height + '/' + tags[tagIndex] + '?lock=' + lockIndex);
    tags.splice(tagIndex, 1);
  }
  return images;
};

for (let i = 1; i <= products; i++) {
  let numImages = Math.round(Math.random() * 4) + 1;
  db.models.ProductImages.create({
    productId: i,
    images: generateImages(numImages, i)
  }).then(() => {
    count++;
    if (count >= products) {
      console.log('Database Seeded');
      process.exit();
    }
  });
}
