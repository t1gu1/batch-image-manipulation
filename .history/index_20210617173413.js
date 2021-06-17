import jimp from 'jimp';

const fs = require('fs');
const imagesFolder = './images/';

async function flip(path, image) {
    const jimpImage = await jimp.read(`${path}${image}`);
  
    jimpImage.flip();
    jimpImage.mirror();
    jimpImage.flip(false, true);
  }

fs.readdir(testFolder, (err, files) => {
  files.forEach(file => {
    console.log(file);
  });
});

