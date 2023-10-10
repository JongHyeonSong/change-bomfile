const fs = require('fs');
const path = require('path');

function changeEncodingToUTF8(file) {
  const filePath = path.resolve(file);
  const originalContent = fs.readFileSync(filePath, { encoding: 'utf8' });
  
  // Remove BOM if present
  const bomRemovedContent = originalContent.replace(/^\uFEFF/, '');
  
  // Save file with UTF-8 encoding
  fs.writeFileSync(filePath, bomRemovedContent, { encoding: 'utf8' });
  
  console.log(`Changed encoding to UTF-8: ${filePath}`);
}

function traverseDirectory(directory) {
  const files = fs.readdirSync(directory);
  
  files.forEach((file) => {
    const filePath = path.join(directory, file);
    const stats = fs.statSync(filePath);
    
    if (stats.isDirectory()) {
      traverseDirectory(filePath);
    } else {
      changeEncodingToUTF8(filePath);
    }
  });
}

// Specify the target folder here
const targetFolder = '/path/to/target/folder';

traverseDirectory(targetFolder);