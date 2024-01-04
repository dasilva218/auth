/**
 * Fonction de connexion.
 * @param {express.Request} req - L'objet de la requête Express.
 * @param {express.Response} res - L'objet de la réponse Express.
 */
exports.signin = (req, res) => {
    res.send("connexion");
};

/**
 * Fonction d'inscription.
 * @param {express.Request} req - L'objet de la requête Express.
 * @param {express.Response} res - L'objet de la réponse Express.
 */
exports.signup = (req, res) => {
    res.send("inscription");
};

/**
 * Fonction du tableau de bord.
 * @param {express.Request} req - L'objet de la requête Express.
 * @param {express.Response} res - L'objet de la réponse Express.
 */
exports.dashboard = (req, res) => {
    res.send("dashboard");
};
