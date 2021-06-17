const fs = require("fs");
const jimp = require("jimp");

const imagesFolder = "./images/";

async function flip(image) {
  const jimpImage = await jimp.read(`${path}${image}`);

  jimpImage.flip();
  jimpImage.mirror();
  jimpImage.flip(false, true);
}

fs.readdir(imagesFolder, (err, files) => {
  files.forEach((file) => {
    console.log(file);
  });
});
