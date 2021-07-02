const { Sequelize } = require('sequelize');
const databaseName = 'images';
const sequelize = new Sequelize('productImages', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
  logging: false
});

const verifyConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}
verifyConnection();

const Image = sequelize.define('Image', {
  product_id: Sequelize.INTEGER,
  image_url: Sequelize.STRING,
  tag_id: Sequelize.INTEGER
})

const Tag = sequelize.define('Tag', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true
  },
  tag_body: Sequelize.STRING
})

// Image.sync({force: true});
// Tag.sync({force: true});

const images = {
  bulkWrite: async (records) => {
    await Image.bulkCreate(records)
      .catch((err) => {
        console.error(err);
      })
  },
  writeOne: async (record) => {
    await Image.create(record);
  },
  deleteOne: async(id) => {
    await Image.destroy({where: {image_id: id}})
  },
  updateOne: async(id, update) => {
    await Image.update(update, {where: {image_id: id}})
  }
}

const tags = {
  bulkWrite: async (records) => {
    await Tag.bulkCreate(records)
      .catch((err) => {
        console.error(err);
      })
  },
  writeOne: async (record) => {
    await Tag.create(record)
      .catch((err) => {
        console.error(err);
      })
  },
  deleteOne: async(id) => {
    await Tag.destroy({where: {id: id}})
  },
  updateOne: async(id, update) => {
    await Tag.update(update, {where: {id: id}})
  }
}

module.exports.images = images;
module.exports.tags = tags;
