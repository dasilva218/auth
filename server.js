// app.js
const express = require('express');
const app = express();

// Importation des routes
const routes = require('./routes/routes');

// Utilisation des routes dans l'application
app.use('/api', routes); // Remplacez "/api" par le chemin que vous souhaitez utiliser pour vos routes

// Démarrage du serveur au port 3000
const port = 3000;

app.listen(port, () => {
    console.log(`Le serveur est en ligne sur le port ${port}`);
});
