const { Sequelize } = require('sequelize');
const databaseName = 'images';
const sequelize = new Sequelize('productImages', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
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
  image_url: Sequelize.STRING,
  tag_id: Sequelize.INTEGER
})

const Tag = sequelize.define('Tag', {
  tag: Sequelize.STRING
})

const images = {
  bulkWrite: async (records) => {
    await bulkCreate(records);
  },
  writeOne: async (record) => {
    await create(record);
  },
  deleteOne: async(id) => {
    await destroy({where: {image_id: id}})
  },
  updateOne: async(id, update) => {
    await update(update, {where: {image_id: id}})
  }
}

console.log(User === sequelize.models.User); // true