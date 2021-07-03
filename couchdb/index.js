const axios = require('axios');
const config = require('../config.js');
const countUrl = `http://${config.username}:${config.pwd}@localhost:5984/${config.database}`;
const postUrl = `http://${config.username}:${config.pwd}@localhost:5984/${config.database}/_bulk_docs`;
const findOneUrl = `http://${config.username}:${config.pwd}@localhost:5984/${config.database}/`;

// generate records
const generateData = async () => {
  let idCount = 0
  for (let i = 0; i < 10; i++) {
    const recordsArr = [];
    for (let k = 0; k < 100; k++) {
      idCount++;
      // const imageCount = Math.floor( Math.random() * )
      const record = {
        _id: idCount.toString(),
        images: []
      }
      const imageCount = 3;
      for (let j = 0; j < imageCount; j++) {
        const imageId = Math.floor( (Math.random() * 1000) + 1 );
        const image = `https://sdc-http-images.s3.amazonaws.com/sdc-image-${imageId}.jpg`;
        record.images.push(image);
      }
      recordsArr.push(record);
    }
    await axios.post(postUrl, {
      docs: recordsArr
    })
      .catch((err) => {
        console.error(err);
      })
  }
}
generateData();

//findOne
const findOne = (id) => {
  axios.get(findOneUrl + `${id}`)
    .then((res) => {
      console.log('success:', res.data);
    })
    .catch((err) => {
      console.error(err);
    })
}
// findOne(101);
