const mysqlDB = require('./index.js');

// generate records
const generateData = async (outer, inner) => {
  let idCount = 0;
  let tagCount = 0;
  for (let i = 0; i < outer; i++) {
    const imagesArr = [];
    const tagsArr = [];
    for (let k = 0; k < inner; k++) {
      tagCount++;
      idCount++;
      // define a productId for the current iteration
      const productId = idCount;
      // generate 4-7 image urls per iteration/ record
      // const imageCount = await Math.floor( Math.random() * (7 - 4 + 1) + 4 );
      const imageCount = 3;
      const generateProductImages = () => {
        for (let i = 0; i < imageCount; i++) {
          //generate tag id
          const tagId = await Math.floor( (Math.random() * 5) + 1 );
          // define random url reference

          // assemble image record
          const image = {
            product_id: productId,
            image_url: `test_url`,
            tag_id: tagId
          }
          imagesArr.push(image);
        }
      }
          //save only 5 tags
        if (tagCount < 5) {
          const tag = {
            id: tagId,
            tag_body: 'test tag body'
          }
          await mysqlDB.tags.writeOne(tag);
        }
      generateProductImages();
    }
    await mysqlDB.images.bulkWrite(imagesArr);
  }
}
generateData(5, 10);