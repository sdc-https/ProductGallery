const mysqlDB = require('./index.js');

const generateData = async (outer, inner) => {
  let idCount = 0;
  let tagCount = 0;
  for (let i = 0; i < outer; i++) {
    const imagesArr = [];
    const tagsArr = [];
    for (let k = 0; k < inner; k++) {
      idCount++;
      const productId = idCount;
      // const imageCount = await Math.floor( Math.random() * (7 - 4 + 1) + 4 );
      const imageCount = 3;
      for (let i = 0; i < imageCount; i++) {
        const imageId = Math.floor( (Math.random() * 1000) + 1 );
        const tagId = Math.floor( (Math.random() * 5) + 1 );
        const image = {
          product_id: productId,
          image_url: `https://sdc-http-images.s3.amazonaws.com/sdc-image-${imageId}.jpg`,
          tag_id: tagId
        }
        imagesArr.push(image);
      }
      if (tagCount < 5) {
        const tag = {
          id: productId,
          tag_body: 'test tag body'
        }
        await mysqlDB.tags.writeOne(tag);
        tagCount++;
      }
    }
    //save to db
    await mysqlDB.images.bulkWrite(imagesArr);

  }
}
generateData(5, 10);