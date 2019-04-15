const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cors = require('cors');
const data = require('./src/utils/data');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ useNewUrlParser: true }));
app.use(cors());

require('dotenv').config();
require('./config/database');

app.use(logger('dev'));
app.use(express.json());

app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')));

app.use('/api/users', require('./routes/api/users'));

app.get('/api/products', (req, res) => {
    return res.json(data.products);
});  
app.post('/api/products', (req, res) => {
let products = [], id = null;
let cart = JSON.parse(req.body.cart);
    if (!cart) return res.json(products)
    for (var i = 0; i < data.products.length; i++) {
        id = data.products[i].id.toString();
        if (cart.hasOwnProperty(id)) {
        data.products[i].qty = cart[id]
        products.push(data.products[i]);
        }
    }
    return res.json(products);
});

app.use(require('./config/auth'));

app.get('/*', function(req, res){
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const port = process.env.PORT || 3001;

app.listen(port, function(){
    console.log(`Express app running on port ${port}`);
});