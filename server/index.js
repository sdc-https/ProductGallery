const express = require('express');
const app = express();
const cors = require('cors');
const db = require('../database/index.js');
const path = require('path');
const port = 3003;

app.use(express.static(path.join(__dirname, '/../client/dist')));
app.use(cors());

const sendIndex = (req, res) => {
  res.sendFile(path.join(__dirname, '/../client/dist/index.html'));
};

app.get('/:dp', sendIndex);
app.get('*/dp/:productId', sendIndex);

app.get('/images/:productId', (req, res) => {
  const productId = req.params.productId;
  console.log('get received:', productId);

  db.models.ProductImages.findOne({productId}, (err, product) => {
    if (product !== null) {
      console.log('product log:', product);
      res.json(product);
    } else {
      res
        .status(404)
        .json({
          productId,
          images: [],
        });
    }
  });
  //res.json({productId});
});


app.listen(port, () => {
  console.log(`Product Gallery listening at http://localhost:${port}`);
});
