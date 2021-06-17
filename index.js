const fs = require("fs");
var path = require("path");
const jimp = require("jimp");

// Path to the folder to edit image
const imagesFolder = "./images/";

const editImages = async (filePath) => {
  const jimpImage = await jimp.read(filePath);
  jimpImage.flip(true, false);
  // Other jimp operation available here: https://github.com/oliver-moran/jimp

  return jimpImage;
};

// Run when program start
fs.readdir(imagesFolder, (err, files) => {
  files.forEach((file) => {
    var filePath = path.resolve(imagesFolder + file);
    editImages(filePath).write(filePath);
  });
});
