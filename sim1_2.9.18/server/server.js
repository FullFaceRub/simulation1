require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const app = new express();
const port = 8080;
const controller = require('./controller.js');
const cors = require('cors');
const massive = require('massive');
const session = require('express-session');

app.use(express.static(`${__dirname}/../build`));
app.use(cors());
app.use(bodyParser.json());

massive(process.env.CONNECTION_STRING).then((db) => {
    app.set('db', db);
})

app.get('/api/bins/:id', controller.getBins);



app.listen(port, () => {
    console.log(`That's no moon, it's a port ${port}`)
})
