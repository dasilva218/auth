const express = require('express');
const app = express();

const port = 3000;
app.listen(port, () => {
    console.log(`Le server est en ligne sur le port ${port}`);
});