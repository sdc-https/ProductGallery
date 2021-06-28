const express = require('express');
const app = express();
const cors = require('cors');
const db = require('../database/index.js');
const path = require('path');
const port = 3003;
const bodyParser = require('body-parser')

app.use(express.static(path.join(__dirname, '/../client/dist')));
app.use(cors());
app.use(bodyParser.json());

const sendIndex = (req, res) => {
  res.sendFile(path.join(__dirname, '/../client/dist/index.html'));
};

app.get('/:dp', sendIndex);
app.get('*/dp/:productId', sendIndex);

app.get('/images/:productId', (req, res) => {
  const productId = req.params.productId;
  console.log('GET received:', productId);

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

// CRUD API

app.post('/images', async (req, res) => {
  let count = await db.models.ProductImages.estimatedDocumentCount();
  const document = {
    productId: count + 1,
    images: req.body.images
  }
  console.log('POST received:', document);
  console.log('db count:', count);

  db.models.ProductImages.create(document, (err, product) => {
    if (err) {
      console.error(err);
    } else {
      console.log('POST success, doc saved:', product)
      res.status(201).json(product);
    }
  });
})

app.put('/images/:productId', (req, res) => {
  const productId = req.params.productId;
  const update = {
    images: req.body.images
  }
  console.log('PUT received:', update);
  db.models.ProductImages.findOneAndUpdate({productId}, update, {
    upsert: true, new: true, overwrite: false
  }, (err, product) => {
    if (err) {
      console.error(err);
      res.status(404).send(err);
    } else {
      console.log('PUT successful:', product)
      res.status(201).json(product);
    }
  });
})

app.delete('/images/:productId', (req, res) => {
  const productId = req.params.productId;
  console.log('DELETE received:', productId);
  db.models.ProductImages.deleteOne({productId}, (err) => {
    if (err) {
      console.error(err);
      res.status(404).send();
    } else {
      res.send('Resource deleted.');
    }
  });
})

app.listen(port, () => {
  console.log(`Product Gallery listening at http://localhost:${port}`);
});
