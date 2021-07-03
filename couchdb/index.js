const axios = require('axios');
const countUrl = 'http://admin:tanner3@localhost:5984/testdb';
const url = 'http://admin:tanner3@localhost:5984/testdb/_bulk_docs';

const config = {
  'Content-Type': 'application/json'
}

// generate records
const generateData = async () => {
  let idCount = 0
  for (let i = 0; i < 10; i++) {
    const recordsArr = [];
    for (let k = 0; k < 100; k++) {
      idCount++;
      const record = {
          productId: idCount,
          images: ['test data', 'hey fren']
      }
      recordsArr.push(record);
    }
    // bulk write 100 records to db
    await axios.post(url, {
      docs: recordsArr
    })
  }
}
// generateData();

// count documents
// axios.get(countUrl)
//   .then((res) => {
//     console.log('doc count:', res.data.doc_count);
//   })