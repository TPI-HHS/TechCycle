const express = require('express')
const router = express.Router()
const verifyJWT = require('../middleware/verifyJWT')
const Product = require('../models/product.model')
const {authenticateToken, authorizeRole} = require('../middleware/verifyAdmin')

router.get('/products', async (req, res) => {
  try {
    const products = await Product.findAll()
    if (products.length === 0) {
      res.status(200).json({ message: 'No products found' })
    } else {
      res.status(200).json(products)
    }
  } catch (error) {
    res.status(500).json({ error: 'Error retrieving products' })
    console.log('Unable to retrieve products', error)
  }
});

router.get("/products/:category", async (req, res) => {
  const searchType = req.params.category;

  try {
    const category = await Product.findAll({
      where: { category: searchType },
    });
    if (category.length === 0) {
      res.status(404).send({ error: `No ${searchType} found` });
    } else {
      res.status(200).json(category);
    }
  } catch (error) {
    res.status(500).send({ error: `Error retrieving ${searchType}` });
    console.log(`Unable to retrieve ${searchType}`, error);
  }
});

router.post('/products', verifyJWT, authenticateToken, authorizeRole('employee'), async (req, res) => {
  const newItem = {
    name: req.body.name,
    price: req.body.price,
    description: req.body.description,
    stocklevel: req.body.stocklevel,
    model: req.body.model,
    category: req.body.category,
    image: req.body.image,
  }
  try {
    console.log(newItem)
    const newProduct = await Product.create(newItem)
    if (newProduct) {
      res.status(201).send(newProduct)
    }
  } catch (error) {
    res.status(500).send({ error: 'Error creating product' })
    console.log('Unable to create product', error)
  }
});

router.get('/products/:id', async (req, res) => {
  try {
    const productId = req.params.id
    const product = await Product.findOne({ where: { id: productId } })
    if (!product) {
      res.status(404).send({ error: 'Product not found' })
    } else {
      res.status(200).json(product)
    }
  } catch (error) {
    res.status(500).send({ error: 'Error retrieving product' })
    console.log('Unable to retrieve product', error)
  }
});

router.put('/products/:id', verifyJWT, authenticateToken, authorizeRole('employee'), async (req, res) => {
  const productId = req.params.id
  try {
    const checkId = await Product.findByPk(productId)

    if (!checkId) {
      res.status(404).send({ message: 'Product not found' })
    } else {
      const updateItem = await Product.update(req.body, {
        where: { id: req.params.id },
      })
      res.status(200).send({ message: 'Product updated' })
    }
  } catch (error) {
    res.status(500).send({ error: 'Server error' })
    console.error('Unable to update Product', error)
  }
});

router.delete('/products/:id', verifyJWT, authenticateToken, authorizeRole('employee'), async (req, res) => {
  try {
    const productId = Number(req.params.id)
    const product = await Product.destroy({ where: { id: productId } })
    if (product === 1) {
      res.status(200).send({ message: 'Product deleted' })
    } else {
      res.status(404).send({ error: `Product not found with id ${productId}` })
    }
  } catch (error) {
    res.status(500).send({ error: 'Error deleting product' })
    console.log('Unable to delete product', error)
  }
});

module.exports = router
