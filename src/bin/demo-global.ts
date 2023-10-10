#!/usr/bin/env node

// import {
//   readCurruntFolder,
//   changeEncodingToUTF8,
//   __add,
//   __minus,
//   __multiple,
//   changeEncodingToUTF8WithBOM,
//   recursiveChangeEncodingToUTF8,
//   recursiveChangeEncodingToUTF8Bom,
// } from "../index";

const allFn = require("../index");

// Delete the 0 and 1 argument (node and script.js)
var args = process.argv.splice(process.execArgv.length + 2);
const currDir = process.cwd();

// Retrieve the first argument
var nm = args[0];
var nm1 = args[1];
var nm2 = args[2];
var nm3 = args[3];

console.log("hello  >  " + allFn);
console.log("hello  >  " + allFn.bomFile);
console.log("hello  >  " + args);
console.log("hello  >  " + nm);
console.log("currDir  >  " + currDir);

if (nm === "list") {
  allFn.fileList.readCurruntFolder();
} else if (nm == "bom") {
  if (nm1 == "single") {
    if (nm2 === "add") {
      allFn.bomFile.changeEncodingToUTF8WithBOM(currDir + "/" + nm3);
    } else if (nm2 === "remove") {
      allFn.bomFile.changeEncodingToUTF8(currDir + "/" + nm3);
    }
  } else if (nm1 == "folder") {
    if (nm2 === "add") {
      allFn.bomFile.recursiveChangeEncodingToUTF8Bom(currDir + "/" + nm3);
    } else if (nm2 === "remove") {
      allFn.bomFile.recursiveChangeEncodingToUTF8(currDir + "/" + nm3);
    }
  }
}
