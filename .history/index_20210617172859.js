import jimp from 'jimp';

const testFolder = './tests/';
const fs = require('fs');

fs.readdir(testFolder, (err, files) => {
  files.forEach(file => {
    console.log(file);
  });
});

async function flip(path, image) {
  const jimpImage = await jimp.read(`${path}${image}`);

  jimpImage.flip();
  jimpImage.mirror();
  jimpImage.flip(false, true);
}