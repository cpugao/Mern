const ProductController = require('../controllers/product.controller');

module.exports = (app) => {
    app.post('/api/products/create', ProductController.create);
    app.get('/api/products', ProductController.getAll);
    app.get('/api/products/:id', ProductController.getOne);
    app.delete("/api/products/:id", ProductController.delete);
}