const db = require('./index.js');

const generateImages = (size = 0) => {
  const url = 'https://placeimg.com/';
  const sizes = [360, 480];
  const tags = ['tech', 'animals', 'arch', 'people'];
  const images = [];
  for (let i = 0; i < size; i++) {
    const width = sizes[Math.round(Math.random() * (sizes.length - 1))];
    const height = sizes[Math.round(Math.random() * (sizes.length - 1))];
    const tag = tags[Math.round(Math.random() * (tags.length - 1))];
    images.push(url + width + '/' + height + '/' + tag);
  }
  return images;
};

for (let i = 1; i <= 100; i++) {
  let numImages = Math.round(Math.random() * 3) + 1;
  db.models.ProductImages.create({
    productId: i,
    images: generateImages(numImages)
  });
}
