// import fs from 'fs';
const fsList = require("fs");

// Get the current directory (folder)
const currentDirectory = process.cwd();

function readCurruntFolder() {
  // Read the contents of the current directory
  fsList.readdir(currentDirectory, (err: any, files: any) => {
    if (err) {
      console.error("Error reading directory:", err);
      return;
    }

    // Log the current directory and its contents
    console.log("Current Directory:", currentDirectory);
    console.log("Contents of Current Directory:");
    files.forEach((file: any) => {
      console.log(file);
    });
  });
}

exports.readCurruntFolder = readCurruntFolder; // 내보내기 1
// export {
// readCurruntFolder
// }
