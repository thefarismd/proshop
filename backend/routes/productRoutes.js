import express from 'express';
import Product from '../models/productModel.js';
import expressAsyncHandler from 'express-async-handler';

const router = express.Router();

// app.get('/api/products', (req, res) => {
//   res.json(products);
// });

// app.get('/api/products/:productid', (req, res) => {
//   const product = products.find(
//     (product) => product._id === req.params.productid
//   );

//   res.json(product);
// });

// @desc     Fetch all products
// @route    GET /api/products
// @access   Public
router.get(
  '/',
  expressAsyncHandler(async (req, res) => {
    const products = await Product.find({});

    // res.status(401);
    // throw new Error('Not Authorized Lababa');
    res.json(products);
  })
);

// @desc     Fetch single product
// @route    GET /api/products/:productid
// @access   Public
router.get(
  '/:productid',
  expressAsyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.productid);

    if (product) {
      res.json(product);
    } else {
      // res.status(404).json({ message: 'Product not found' });
      res.status(404);
      throw new Error('Product not found');
    }
  })
);

export default router;
