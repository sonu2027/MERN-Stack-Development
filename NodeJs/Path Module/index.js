const path = require("path");

console.log("Separator: " + path.sep); // OUTPUT: / in mac, \ in window
console.log("Delimeter: " + path.delimiter);
console.log(process.env.PATH); // OUTPUT: : in mac, ; in window

const currentDirPath = __dirname;
console.log("Current Directory Path: " + currentDirPath);

const currentFilePath = __filename;
console.log("Current File Path: " + currentFilePath);

const currentFilePathBasename = path.basename(currentFilePath);
console.log("current File Path Basename: " + currentFilePathBasename);

const currentFilePathBasenameWithoutExtensionname = path.basename(
  currentFilePath,
  ".js"
);
console.log(
  "current File Path Basename Without Extensionname: " +
    currentFilePathBasenameWithoutExtensionname
);

const currentFilePathExtensionname = path.extname(currentFilePath);
console.log("current File Path Extensionname: " + currentFilePathExtensionname);

const currentFilePathDirectoryname = path.dirname(currentFilePath);
console.log("current File Path Directoryname: " + currentFilePathDirectoryname);


let pathToFile=path.format({
    dir:"C:\html\home\sonu",
    base:"main.js"
})
console.log("Path to file: "+pathToFile);

console.log(path.isAbsolute(currentFilePath));
console.log(path.isAbsolute("/index.js"));
console.log(path.isAbsolute("../index.js"));

let pathToDir=path.join("/home", "sonu", "html", "index.html")
console.log(pathToDir);

console.log("Parse: ", path.parse(currentFilePath));

console.log("Relative path: ", path.relative("/home/sonu/html", "/home/sonu/index.html"));

console.log(path.resolve());
console.log(path.normalize("//home/sonu//code"));