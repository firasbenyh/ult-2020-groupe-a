let express = require('express');
const productRoute = express.Router();

// Product model
let Product = require('../models/product');

// Get All Products
productRoute.route('/').get((req, res, next) => {
  Product.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data);
    }
  })
});

// Get single product
productRoute.route('/:id').get((req, res, next) => {
  Product.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});

// Add a new product
productRoute.route('/').post((req, res, next) => {
  Product.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});

// Update product
productRoute.route('/:id').put((req, res, next) => {
  Product.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
      console.log(error)
    } else {
      res.json(data)
      console.log('Data updated successfully')
    }
  })
})

// Delete product
productRoute.route('/:id').delete((req, res, next) => {
  Product.findOneAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})

module.exports = productRoute;
