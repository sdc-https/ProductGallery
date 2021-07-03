const mysqlDB = require('./index.js');
const faker = require('faker');

const generateData = async (outer, inner) => {
  console.time('benchmark');
  let idCount = 0;
  let tagCount = 0;
  for (let i = 0; i < outer; i++) {
    const imagesArr = [];
    for (let k = 0; k < inner; k++) {
      idCount++;
      const imageCount = await Math.floor( Math.random() * (7 - 4 + 1) + 4 );
      // const imageCount = 3;
      for (let i = 0; i < imageCount; i++) {
        const imageId = Math.floor( (Math.random() * 1000) + 1 );
        const tagId = Math.floor( (Math.random() * 5) + 1 );
        const image = {
          product_id: idCount,
          image_url: `https://sdc-http-images.s3.amazonaws.com/sdc-image-${imageId}.jpg`,
          tag_id: tagId
        }
        imagesArr.push(image);
      }
      if (tagCount < 5) {
        const tag = {
          id: idCount,
          tag_body: faker.commerce.department()
        }
        mysqlDB.tags.writeOne(tag);
        tagCount++;
      }
    }
    //save to db
    await mysqlDB.images.bulkWrite(imagesArr);
  }
  console.timeEnd()
}
generateData(1000, 10000);