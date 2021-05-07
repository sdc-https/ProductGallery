const express = require('express');
const app = express();
const port = 1166;
const db = require('../database/index.js');
const path = require('path');

app.use(express.static(path.join(__dirname, '/../client/dist'), {index: false}));

app.get('/', (req, res) => {
  res.redirect('./dp/1');
});

const sendIndex = (req, res) => {
  console.log('sent');
  res.sendFile(path.join(__dirname, '/../client/dist/index.html'));
};

app.get('/:productName/dp/:productId', sendIndex);
app.get('/dp/:productId', sendIndex);

app.get('/images/:productId', (req, res) => {
  const productId = req.params.productId;
  db.models.ProductImages.findOne({productId}, (err, product) => {
    if (err) {
      res.sendStatus(404); //wrong code but whatever
    } else {
      if (product !== null) {
        res.json(product);
      } else {
        res
          .status(404)
          .json({
            productId,
            images: [],
          });
      }

    }
  });
  //res.json({productId});
});


app.listen(port, () => {
  console.log(`Product Gallery listening at http://localhost:${port}`);
});
