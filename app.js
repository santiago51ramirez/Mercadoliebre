const express = require ('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 3000

app.listen (PORT, () => console.log('Servidor iniciado'));

app.use(express.static('public'));

app.get ('/', (req, res) => {
    let htmlPath = path.resolve(__dirname, './views/index.html');  /* ---> CON RESOLVE */
    res.sendFile (htmlPath)
})