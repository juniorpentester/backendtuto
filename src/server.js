//partie1: importer les biblioteques (require et dotenv) execute la fonction config du module dotenv
require("dotenv").config();

//importer express
const express = require("express");

//partie 2: creer l'application
const app = express();
const routerTaches = require('./routerTaches');
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

//mock donnees
let taches = [
  {
    id: 1,
    titre: "Apprendre Express",
    description: "Les bases",
    termine: false,
  },
  {
    id: 2,
    titre: "Construire une API",
    description: "RESTful",
    termine: false,
  },
];

//transformer le json recu en js object | transformer les formulaire en js object
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//logger pour les requetes
app.use((req, res, next) => {
  console.log(`${req.method}  ${req.url}  ${new Date().toLocaleTimeString()}`);
  next();
});

// temps de reponse du router
app.use((req, res, next) => {
  const debut = Date.now();
  next();
  const fin = Date.now();
  console.log(`temps de reponse: ${fin - debut}ms.`);
});

//authorization header is used to authenticate the request before granting access to ressources.
app.use("/admin", (req, res, next) => {
  const token = req.headers["authorization"];
  if (!token) {
    return res.status(401).send("access refuse, token manquant");
  }
  console.log("token valide!");
  next();
});

//route
app.post("/taches/:id", (req, res) => {
  const nouvelleTaches = {
    id: "1",
    titre: req.body.titre,
    description: description || "",
    terminate: false,
  };
  taches.push(nouvelleTaches);
  res.status(201).json(nouvelleTaches);
});

app.get("/dashboard", (req, res) => {
  res.send("Welcome to Home Page");
});

app.get("/taches", (req, res) => {
  return res.json(taches);
});

app.get("/taches/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const taches = taches.find((t) => t.id === id);

  if (!taches) {
    return res.status(404).json({ erreur: "erreur" });
  }

  res.json(taches);
});

app.put("/taches/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const taches = taches.find((t) => t.id === id);

  if (!taches) {
    return res.status(404).json({ erreur: "Tache non trouver" });
  }

  tache.titre = req.body.titre || tache.titre;
  tache.description = req.body.description || tache.description;
  tache.termine =req.body.termine !== undefined ? req.body.termine : tache.termine;

  res.json(taches);
});

app.get("/admin/dashborad", (req, res) => {
  res.send("Admin portal, for configuration");
});

//middlewares erreur
app.use((err, req, res, next) => {
  console.error("Erreur: ", err.message);
  res.status(500).json({ error: "Une erreur est survenue" });
});

app.listen(port, () => {
  console.log(`the server is listening on port ${port}`);
});
