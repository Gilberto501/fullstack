var fs = require("fs");
console.log("\n abriendo archivo...")

var content = fs.readFile("quijote.txt", "utf8", function(error,content){  //utf8 el formato del arvhivo a leer
    console.log(content)
});
console.log(content);

console.log("\n Haciendo otra cosa");
console.log(process.uptime()) //muestra los tiempos