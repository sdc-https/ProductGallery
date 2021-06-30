const axios = require('axios');
const config = require('../config.js');

const countUrl = `http://admin:${config.pwd}@localhost:5984/images`;
const url = `http://admin:${config.pwd}@localhost:5984/images/_bulk_docs`;

// generate records
// const generateData = async () => {
//   let idCount = 0
//   for (let i = 0; i < 1000; i++) {
//     const recordsArr = [];
//     for (let k = 0; k < 10000; k++) {
//       idCount++;
//       const record = {
//           productId: idCount,
//           images: ['test data', 'hey fren']
//       }
//       recordsArr.push(record);
//     }
//     // bulk write 100 records to db
//     await axios.post(url, {
//       docs: recordsArr
//     })
//   }
// }
// generateData();

// count documents
axios.get(countUrl)
  .then((res) => {
    console.log('doc count:', res.data.doc_count);
  })