const express = require('express');
const router = express.Router();
const productCtrl = require('../../controllers/products');


app.get('/api/products', productCtrl.getProducts);

app.post('/api/products', productCtrl.updateCart);

export default router;