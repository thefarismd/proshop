import Product from '../models/productModel.js';
import expressAsyncHandler from 'express-async-handler';

// @desc     Fetch all products
// @route    GET /api/products
// @access   Public
const getProducts = expressAsyncHandler(async (req, res) => {
  const products = await Product.find({});

  // res.status(401);
  // throw new Error('Not Authorized Lababa');
  res.json(products);
});

// @desc     Fetch single product
// @route    GET /api/products/:productid
// @access   Public
const getProductById = expressAsyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.productid);

  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ message: 'Product not found.' });
    // res.status(404);
    // throw new Error('Product not found');
  }
});

export { getProducts, getProductById };
