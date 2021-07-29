const { Sequelize } = require('sequelize');

module.exports = function(sequelize) {

  let models = {
    Images: sequelize.define('image', {
      product_id: Sequelize.INTEGER,
      image_url: Sequelize.STRING,
      tag_id: Sequelize.INTEGER
    }, {
      tableName: 'images',
      logging: false
    }),
    Tags: sequelize.define('tag', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true
      },
      tag_body: Sequelize.STRING
    }, {
      tableName: 'tags',
      logging: false
    })
  };

  return models;
}