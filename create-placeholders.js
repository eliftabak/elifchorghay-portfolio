const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const imagesDir = path.join(__dirname, 'public/images');
const placeholderDir = path.join(imagesDir, 'placeholders');

if (!fs.existsSync(placeholderDir)) {
  fs.mkdirSync(placeholderDir, { recursive: true });
}

const images = [
  'elifchorghay.jpg',
  'wave.png',
];

images.forEach((image) => {
  sharp(path.join(imagesDir, image))
    .resize(20)
    .toFile(path.join(placeholderDir, `placeholder-${image}`), (err, info) => {
      if (err) {
        console.error(`Error creating placeholder for ${image}:`, err);
      } else {
        console.log(`Placeholder created for ${image}:`, info);
      }
    });
});
