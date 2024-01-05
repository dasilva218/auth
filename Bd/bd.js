// bds.js
const { connect } = require("mongoose");

function dbConnection() {
    return connect('mongodb://localhost:27017/ma_base_de_donnee')
    .then(() => console.log('Votre connexion à la base de données est réussie.'))
    .catch(error => console.error('Erreur de connexion à la base de données :', error))
}

module.exports = dbConnection;
