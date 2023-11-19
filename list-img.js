const fs = require('fs');
const path = require('path');

const imgFolder = './img';  // Adjust the path accordingly
const jsonFilePath = 'images.json';

function readFilesInFolder(folderPath) {
  return fs.readdirSync(folderPath);
}

function createJson() {
  const imageFolders = readFilesInFolder(imgFolder);
  const imageJson = {};

  imageFolders.forEach(folder => {
    const folderPath = path.join(imgFolder, folder);
    const images = readFilesInFolder(folderPath);
    imageJson[folder] = images;
  });

  const jsonString = JSON.stringify(imageJson, null, 2);
  fs.writeFileSync(jsonFilePath, jsonString);
  console.log('images.json created successfully.');
}

createJson();
