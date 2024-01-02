const express = require("express");
const router = express.Router()



router.get('./dashboard', (req, res) => {
    // Vérifiez si l'utilisateur est authentifié
  
    if (req.isAuthenticated()) {
      // L'utilisateur est authentifié
  
      // Affichez le tableau de bord
  
      res.send('Bienvenue sur le tableau de bord !');
    } else {
      // L'utilisateur n'est pas authentifié
  
      res.status(401).send({
        success: false,
      });
    }
  });
  


  module.exports = router;