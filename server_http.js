const  http = require('http'); //llama el modulo http
const hostname='192.168.1.101'; //establecemos la url o ip de nuestro servidor
const port = 3000 //establecemos el puerto de escucha

const server = http.createServer((req,res)=>{ //creamos una instancia HTTP con un reques y un respond
    res.statusCode = 200; //wl servidor respondera un codigo 200
    res.setHeader('Content-Type', 'text/html');
    res.end('<h1>Hola mundo</h1>');
});

server.listen(port, hostname, ()=>{
    console.log('El servidor esta corriendo en http://${hostname}:${port}/');
});