const fs = require('fs');
const path = require('path');

const imgFolder = './converted/img';
const jsonFilePath = 'images.json';

const excludeDirs = ['club']; 

function readFilesInFolder(folderPath) {
  return fs.readdirSync(folderPath).filter(item => {
    const itemPath = path.join(folderPath, item);
    return fs.statSync(itemPath).isDirectory() && !excludeDirs.includes(item);
  });
}

function createJson() {
  const imageFolders = readFilesInFolder(imgFolder);
  const imageJson = {};

  imageFolders.forEach(folder => {
    const folderPath = path.join(imgFolder, folder);
    const images = fs.readdirSync(folderPath);
    imageJson[folder] = images;
  });

  const jsonString = JSON.stringify(imageJson, null, 2);
  fs.writeFileSync(jsonFilePath, jsonString);
  console.log('images.json created successfully.');
}

createJson();
