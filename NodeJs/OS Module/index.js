const os = require("os");

console.log("OS Architecture: ", os.arch());
console.log("OS Free Memory in bytes: ", os.freemem());
console.log("OS Total Memory in bytes: ", os.totalmem());
console.log("OS Network Interfaces: ", os.networkInterfaces());
console.log("OS Temporairly Directory: ", os.tmpdir());

console.log("OS Endianness: ", os.endianness());
console.log("OS Type: ", os.type());
console.log("OS Host Name: ", os.hostname());
console.log("OS Release: ", os.release());
console.log("OS Platform: ", os.platform());
