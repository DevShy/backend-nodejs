const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Olá, Eduardo! :D')
})

app.listen(3001);