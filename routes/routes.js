// routes/routes.js
const { Router } = require("express");
const router = Router();


// Importation du contrôleur
const { signin, signup, dashboard } = require('../controllers/ControllerUsers');

// Routes
router.post("/signin", signin);
router.post("/signup", signup);
router.get("/dashboard", dashboard);

module.exports = router;
