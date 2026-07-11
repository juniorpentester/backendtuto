//importer le module http avec require
const http = require('http');
//creer un serveur
//port
const port = process.env.port || 3000;

const serveur = http.createServer((req,res)=>{
    if(req.url === '/' && req.method === 'GET'){
       res.writeHead(200, 'success', {
            'content-type':'text/plain',
            'content-encoding':'utf8'
        });
        res.end('Welcome to my Home Page');
    }else{
        res.writeHead(404);
        res.end('error page not found');
    }
});

serveur.listen(port);
console.log(`the server is running on port ${port}`);


