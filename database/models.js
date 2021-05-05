module.exports = function(mongoose) {
  let productImageSchema = new mongoose.Schema({
    productId: {type: String, required: true, unique: true},
    images: [String]
  });

  let models = {
    ProductImages: mongoose.model('ProductImages', productImageSchema),
  };

  return models;
};