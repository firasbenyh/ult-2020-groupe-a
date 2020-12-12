const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let productSchema = new Schema({
  productName: { type: String },
  price: { type: Number },
  image : { type: String },
  description: { type: String }
},{
  collection: 'products'
});

module.exports = mongoose.model('Product', productSchema);
