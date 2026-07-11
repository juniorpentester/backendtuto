//partie1: importer les biblioteques (require et dotenv)
//execute la fonction config du module dotenv
require('dotenv').config();

//importer express
const express = require('express');


//partie 2: creer l'application

const app = express();

//partie 3: lire les variables d'environment
const port = process.env.port || 3000;

//there is a logical order when it comes to middleware
/*
1. midllewares de base qui ne dependent de rien
2. midllewares de login
3. midllewares d'authentification
4. midllewares de validation
5. routes //not a middleware 
6. middlewares d'erreur
*/
//logger pour les requetes
app.use((req, res, next)=>{
    console.log(`${req.method}  ${req.url}  ${new Date().toLocaleTimeString()}`);
    next();
});

// temps de reponse du router
app.use((req, res, next)=>{
    const debut = Date.now();
    next();
    const fin =  Date.now();
    console.log(`temps de reponse: ${fin - debut}ms.`);
});

//authorization header is used to authenticate the request before granting access to ressources.

app.use('/admin', (req, res, next)=>{
    const token = req.headers['authorization']; 

    if (!token){
        return res.status(401).send('access refuse, token manquant');
        
    }
    console.log('token valide!');
    next();
})

//transformer le json recu en js
app.use(express.json());

//server

app.get('/dashboard', (req,res)=>{
    res.send('Welcome to Home Page');
})


app.get('/admin/dashborad', (req,res)=>{
    res.send('Admin portal, for configuration');
})


app.listen(port, ()=>{
    console.log(`the server is listening on port ${port}`);
})