const express = require('express');
const app = express();
const port = 1166;
const db = require('../database/index.js');

app.use(express.static(__dirname + '/../client/dist'));
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/../client/dist/index.html');
});

app.get('/images/:productId', (req, res) => {
  const productId = req.params.productId;
  db.models.ProductImages.findOne({productId}, (err, product) => {
    if (err) {
      res.status(404); //wrong code but whatever
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
