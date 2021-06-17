const fs = require("fs");
const jimp = require("jimp");

const imagesFolder = "./images/";

async function flip(path, image) {
  const jimpImage = await jimp.read(`${path}${image}`);

  jimpImage.flip();
  jimpImage.mirror();
  jimpImage.flip(false, true);
}

async function getFilesInFolder() {
  fs.readdir(imagesFolder, (err, files) => {
    files.forEach((file) => {
      flip(imagesFolder, file);
    });
  });
}
