const mysqlDB = require('./index.js');
const faker = require('faker');

const generateData = async (outer, inner) => {
  console.log('seeding database...');
  console.time('seed-timer');
  let idCount = 0;
  let tagCount = 0;
  let imageId = 0;
  for (let i = 0; i < outer; i++) {
    const imagesArr = [];
    for (let k = 0; k < inner; k++) {
      idCount++;
      const imageCount = Math.floor( Math.random() * (7 - 4 + 1) + 4 );
      // const imageCount = 3;
      for (let i = 0; i < imageCount; i++) {
        imageId++;
        if (imageId > 1000) {
          imageId = 1;
        }
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
      }
      tagCount++;
    }
    //save to db
    await mysqlDB.images.bulkWrite(imagesArr);
  }
  console.timeEnd('seed-timer');
}
generateData(2000, 5000);