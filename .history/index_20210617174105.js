const fs = require("fs");
const jimp = require("jimp");

const imagesFolder = "./images/";

async function flipImage(path, image) {
  const jimpImage = await jimp.read(`${path}${image}`);

  jimpImage.flip();
  jimpImage.mirror();
  jimpImage.flip(false, true);
}

async function getElementsInFolder() {
  fs.readdir(imagesFolder, (err, files) => {});
}

files.forEach((file) => {
  flipImage(imagesFolder, file);
});
