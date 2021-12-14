const repository = require('./repository');

class ProductsRepository extends repository {

}

module.exports = new ProductsRepository('products.json')
