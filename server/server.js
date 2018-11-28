require('dotenv').config()
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const {Episode} = require('./models/episode');
mongoose.Promise = global.Promise;
mongoose.connect(`mongodb://${process.env.USERNAME}:${process.env.PASSWORD}${process.env.DB}`, { useNewUrlParser: true });

const app = express();
//middleware to parse JSON
app.use(cors());

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