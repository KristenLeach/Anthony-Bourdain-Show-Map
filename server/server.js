require('dotenv').config()
const express = require('express');
const bodyParser = require('body-parser');

const {mongoose} = require('./db/mongoose');
const {Episode} = require('./models/episode');

const app = express();
//middleware to parse JSON
app.use(bodyParser.json());

app.get('/', (req, res) => {
    Episode.find().then((episodes) => {
        res.send({episodes})
    }, (e) => {
        res.status(400).send(e);
    });
});

app.listen(3000, () => {
    console.log('Started on port 3000');
});

module.exports = {app}