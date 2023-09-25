const express = require('express');
const { getInventory, getModels } = require('./products.js');
const app = express();
const gethtml = require('./page');

app.get('', (req, res) => {

    res.send(gethtml(getInventory()));
})

app.get('/dell', (req, res) => {
    const inv = getModels('dell');
    const html = gethtml(inv);
    res.send(html);
})

app.get('/lenovo', (req, res) => {
res.send(getModels('lenovo'))
})

app.get('/apple', (req, res) => {
res.send(getModels('apple'))
})

app.listen(4000, () => {
    console.log('listening on port 3000');
})