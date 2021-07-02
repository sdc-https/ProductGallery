const mysql = require('./index.js');

// generate records
const generateData = async () => {
  for (let i = 0; i < 1000; i++) {
    let idCount = 0;
    const imagesArr = [];
    const tagsArr = [];
    for (let k = 0; k < 10000; k++) {
      idCount++;
      // define a productId for the current iteration
      const productId = idCount;
      // generate 4-7 image urls per iteration/ record
      const imageCount = await Math.floor( Math.random() * (7 - 4 + 1) + 4 );
      const generateProductImages = () => {
        for (let i = 0; i < imageCount; i++) {
          // define random url reference

          // assemble image record
          const image = {
            productId: productId,
            image_url: `test_url/${}`
          }
          imagesArr.push(image);
        }
      }
    }
    // save to db
    await mysql.images.bulkWrite(imagesArr);
    await mysql.tags.bulkWrite(tagsArr);

  }
}