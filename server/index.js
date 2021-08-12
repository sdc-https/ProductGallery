const newrelic = require('newrelic');
const express = require('express');
const app = express();
const cors = require('cors');
const db = require('../mySQL/index.js');
const path = require('path');
const port = 3003;
const morgan = require("morgan");
const bodyParser = require('body-parser');

app.use(express.static(path.join(__dirname, '/../client/dist')));
app.use(cors());
app.use(morgan('tiny'));
app.use(bodyParser.json());

const sendIndex = (req, res) => {
  res.sendFile(path.join(__dirname, '/../client/dist/index.html'));
};

app.get('/:dp', sendIndex);
app.get('*/dp/:productId', sendIndex);

// CRUD API

app.get('/images/:productId', (req, res) => {
  const productId = req.params.productId;
  // db.Images.sync({force: true});
  return db.models.Images.findAll({
    where: {product_id: productId}, raw: true, attributes: ['image_url']
  })
    .then((productImages) => {
      if (productImages !== null) {
        const urls = productImages.map( (image) => image.image_url);
        res.json({
          productId,
          images: urls
        });
      } else {
        throw 'No such product!';
      }
    })
    .catch((err) => {
      res
      .status(404)
      .json({
        productId,
        images: [],
      });
    })
  })

app.post('/images/:productId', async (req, res) => {
  const productId = req.params.productId;
  const imageURL = req.body.url;
  const tagId = await Math.floor( (Math.random() * 5) + 1 );
  const imageRecord = {
    product_id: productId,
    image_url: req.body.url,
    tag_id: tagId
  }
  // console.log('POST received:', productId);

  db.models.Images.create(imageRecord)
    .then((product) => {
      // console.log('POST success, doc saved:', product)
      res.status(201).json(product);
    })
    .catch((err) => {
      console.error(err);
    })
})

app.put('/images/:productId', (req, res) => {
  const productId = req.params.productId;
  const update = {
    images: req.body.images
  }

  db.models.ProductImages.findOneAndUpdate({productId}, update, {
    upsert: true, new: true, overwrite: false
  }, (err, product) => {
    if (err) {
      console.error(err);
      res.status(404).send(err);
    } else {
      res.status(201).json(product);
    }
  });
})

app.delete('/images/:productId', (req, res) => {
  const productId = req.params.productId;
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
