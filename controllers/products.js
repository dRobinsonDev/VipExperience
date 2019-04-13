
module.exports = {
    getProducts,
    updateCart
}

const getProducts = (req, res) => {
    return res.json(data.products);
}

const updateCart = (req, res) => {
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
  }