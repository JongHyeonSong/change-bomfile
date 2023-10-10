const fsBom = require("fs");
const path = require("path");
// import fs from "fs";
// import path from "path";

function changeEncodingToUTF8(file: any) {
  const filePath = path.resolve(file);
  const originalContent = fsBom.readFileSync(filePath, { encoding: "utf8" });

  // Remove BOM if present
  const bomRemovedContent = originalContent.replace(/^\uFEFF/, "");

  // Save file with UTF-8 encoding
  fsBom.writeFileSync(filePath, bomRemovedContent, { encoding: "utf8" });

  console.log(`Changed encoding to UTF-8: ${filePath}`);
}

function changeEncodingToUTF8WithBOM(file: any) {
  const filePath = path.resolve(file);
  const originalContent = fsBom.readFileSync(filePath, { encoding: "utf8" });

  // Add BOM to the content
  const contentWithBOM = "\uFEFF" + originalContent;

  // Save file with UTF-8 encoding and BOM
  fsBom.writeFileSync(filePath, contentWithBOM, { encoding: "utf8" });

  console.log(`Changed encoding to UTF-8 with BOM: ${filePath}`);
}

function traverseDirectory(directory: any, fn?: any) {
  console.log("HIHI", fn);
  const files = fsBom.readdirSync(directory);

  files.forEach((file: any) => {
    const filePath = path.join(directory, file);
    const stats = fsBom.statSync(filePath);

    if (stats.isDirectory()) {
      traverseDirectory(filePath, fn);
    } else {
      fn(filePath);
    }
  });
}

function recursiveChangeEncodingToUTF8(targetFolder: string) {
  traverseDirectory(targetFolder, changeEncodingToUTF8);
}

function recursiveChangeEncodingToUTF8Bom(targetFolder: string) {
  traverseDirectory(targetFolder, changeEncodingToUTF8WithBOM);
}

// Specify the target folder here
// const targetFolder = "target";
// traverseDirectory(__dirname + "/" + targetFolder);

// recursiveChangeEncodingToUTF8Bom(__dirname + "/" + targetFolder);
// recursiveChangeEncodingToUTF8(__dirname + "/" + targetFolder);

// const ff = () => {};

// export {
//   changeEncodingToUTF8,
//   changeEncodingToUTF8WithBOM,
//   recursiveChangeEncodingToUTF8,
//   recursiveChangeEncodingToUTF8Bom,
// };

exports.num = "bomFile"; // 내보내기 1
exports.changeEncodingToUTF8 = changeEncodingToUTF8; // 내보내기 1
exports.changeEncodingToUTF8WithBOM = changeEncodingToUTF8WithBOM; // 내보내기 1
exports.recursiveChangeEncodingToUTF8 = recursiveChangeEncodingToUTF8; // 내보내기 1
exports.recursiveChangeEncodingToUTF8Bom = recursiveChangeEncodingToUTF8Bom; // 내보내기 1
