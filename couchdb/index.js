const axios = require('axios');
const config = require('../config.js');
const countUrl = `http://${config.username}:${config.pwd}@localhost:5984/${config.database}`;
const postUrl = `http://${config.username}:${config.pwd}@localhost:5984/${config.database}/_bulk_docs`;
const findOneUrl = `http://${config.username}:${config.pwd}@localhost:5984/${config.database}/`;

// generate records
const generateData = async () => {
  let idCount = 0
  for (let i = 0; i < 1000; i++) {
    const recordsArr = [];
    for (let k = 0; k < 10000; k++) {
      idCount++;
      // const imageCount = Math.floor( Math.random() * )
      for (let j = 0; j < imageCount; j++) {
        const record = {
            _id: idCount.toString(),
            images: ['test data', 'hey fren']
        }
        recordsArr.push(record);
      }
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
