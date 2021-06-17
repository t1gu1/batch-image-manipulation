const fs = require("fs");
var path = require("path");
const jimp = require("jimp");

const imagesFolder = "./images/";

async function flip(filePath) {
  const jimpImage = await jimp.read(filePath);
  jimpImage.flip(true, false).write(filePath);
}

fs.readdir(imagesFolder, (err, files) => {
  files.forEach((file) => {
    var filePath = path.resolve(imagesFolder + file);
    console.log(filePath);
    flip(filePath);
  });
});
