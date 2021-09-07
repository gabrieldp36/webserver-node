const http = require('http');

const persona = {
    id: 1,
    nombre: 'Paula',
};

http.createServer( (request, response) => {

    // response.writeHead(200, {'Content-Type':'text/plain'})

    // response.writeHead(200, {'Content-Type':'application/json'})

    // response.write(JSON.stringify(persona));

    response.setHeader('Content-Disposition', 'attachment; filename=lista.csv');
    
    response.writeHead(200, {'Content-Type':'application/csv'});
    
    response.write( 'id, Nombre\n');
    response.write( '1, Paula\n');
    response.write( '2, Gabriel\n');
    response.write( '3, Geralt\n');
    response.write( '4, Cati\n');

    response.end();

}).listen(8080);