const AWS = require('aws-sdk');
const config = require('../config.js');
const fs = require('fs');
const path = require('path');
const dirPath = path.join(__dirname, '/repository');

const s3 = new AWS.S3({
  accessKeyId: config.bucket_id,
  secretAccessKey: config.bucket_secret
});

const uploadImages = (folderPath) => {
  // Read content from the directory
  fs.readdir(folderPath, (err, files) => {
    if (err) {
      console.error(err);
    }
    console.log('called!')
    for (let file of files) {
      const filePath = path.join(dirPath, file);
      console.log(filePath);
      fs.readFile(filePath, (error, content) => {
        if (error) {
          console.error(error);
        }
        s3.putObject({
          Bucket: config.bucket_name,
          Key: file,
          Body: content
        }, (res) => {
          // console.log('successfully uploaded file');
        })
      })
    }
  });
};

uploadImages(dirPath);
