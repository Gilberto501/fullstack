var fs = require("fs");
console.log("\n abriendo archivo...")

var content = fs.readFileSync("archivo.txt");
console.log(content);

console.log("\n Haciendo otra cosa");
console.log(process.uptime())