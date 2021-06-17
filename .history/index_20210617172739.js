import jimp from 'jimp';

const testFolder = './tests/';
const fs = require('fs');

fs.readdir(testFolder, (err, files) => {
  files.forEach(file => {
    console.log(file);
  });
});

async function main(imagePath) {
  const image = await jimp.read('test/image.png');

  image.flip();
  image.mirror();
  image.flip(false, true);
}

main();