// routes/routes.js
const { Router } = require("express");
const router = Router();


// Importation du contrôleur
const { signin, signup } = require('../controllers/ControllerUsers');

// Routes
router.post("/signin", signin);
router.post("/signup", signup);

module.exports = router;
