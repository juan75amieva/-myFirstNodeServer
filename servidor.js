 
 //importar Librerias
 
 const moment = require('moment');
 const http  = require('http');
const { format } = require('path');

 //definir valores de inicializacion

 const host = 'localhost'
 const port =8080;

 //Crear el servidor
 const server = http.createServer((request, response) =>{
     //console.console.log(request.url);

     if(request.url ==='/'){
         // esto es para la cabecera
         response.writeHead(200, {
             'Content-Type': 'text/html',
             
         });
         //esto es para el cuerpo
         response.write('<h1>Ya se Node!</h1>');
         //llamar al metodo end para enviar el paquete
         response.end();
     }
     else

     if(request.url ==='/wh'){
        // esto es para la cabecera
        response.writeHead(200, {
            'Content-Type': 'text/html',
            
        });
        //esto es para el cuerpo
        response.write('<p style="color: orange">Happy Halloween!</p>');
        //llamar al metodo end para enviar el paquete
        response.end();
    }
    else

    if(request.url ==='/myjson'){
        // esto es para la cabecera
        response.writeHead(200, {
            'Content-Type': 'application/json',
            
        });
        //esto es para el cuerpo
        response.write(JSON.stringify({'nombre': 'espagueti', 'apellido': 'Volador'}));
        //llamar al metodo end para enviar el paquete
        response.end();
    }
    else

    if(request.url ==='/timenow'){
        // esto es para la cabecera
        response.writeHead(200, {
            'Content-Type': 'text/html',
            
        });
        //esto es para el cuerpo
        const ahora = moment().format('LTS')
        response.write(ahora);
        //llamar al metodo end para enviar el paquete
        response.end();
    }
    else

         // esto es para la cabecera
        response.writeHead(404, {
            'Content-Type': 'text/html',
            
        });
        //esto es para el cuerpo
        response.write('<p style="color: red">Estos no son los androides que buscas!</p>');
        //llamar al metodo end para enviar el paquete
        response.end();
    
 });


//arrancar el servidor
 server.listen(port, host, ()=> {
     console.log(`este servidor esta funcionando en http://${host}:${port}`);
 })
