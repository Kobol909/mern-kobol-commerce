/**
 * Product controller
 * ==================
 *
 */
const mongoose = require('mongoose');
const Joi = require('joi');
const _ = require('lodash');
const createError = require('http-errors');
const constants = require('../core/constants');
const Product = mongoose.model('Product');
require('dotenv').config();

/**
 * Joi schema for validating getProducts query
 */
const getProductsSchema = Joi.object({
  sort: Joi.string()
    .trim()
    .pattern(/^(-?[A-Za-z]+)( -?[A-Za-z]+)*$/), // matches "-descFieldName ascFieldName"
  limit: Joi.number().integer().default(30),
  skip: Joi.number().integer().default(0),
  name: Joi.string().trim(),
  description: Joi.string().trim(),
  attributes: Joi.array().items(Joi.string()),
  categories: Joi.array().items(Joi.string()),
  tags: Joi.array().items(Joi.string()),
  images: Joi.array().items(Joi.string()),
  thumbnail: Joi.array().items(Joi.string()),
  price: Joi.number().integer(),
  seller: Joi.string(),
  inventoryQuantity: Joi.number().integer(),
  sku: Joi.string(),
  createdAt: Joi.date(),
  updatedAt: Joi.date()
});

module.exports.getProducts = (req, res, next) => {
  getProductsSchema
    .validateAsync(req.query)
    .then((payload) => {
      req.query = payload;
      const query = _.pick(req.query, [
        'name',
        'description',
        'attributes',
        'categories',
        'tags',
        'images',
        'thumbnail',
        'price',
        'seller',
        'inventoryQuantity',
        'sku',
        'createdAt',
        'updatedAt'
      ]);
      Product.find(query, (err, products) => {
        if (err) {
          return next(err);
        }
        res.json(products);
      });
    })
    .catch((err) => {
      next(createError(400, err.details[0].message));
    });
};

/**
 * @function createProduct
 * Create a new product controller.
 * Need to check if the product already exists, to do so, we need to check the product's name and sku are unique.
 * If the product already exists, we need to return a 409 error.
 * If the product does not exist, we need to create a new product.
 */
module.exports.createProduct = (req, res, next) => {
  Product.find({ $or: [{ name: req.body.name }, { sku: req.body.sku }] }, (err, products) => {
    if (err) {
      return next(err);
    } else if (products.length > 0) {
      return next(createError(409, 'Product already exists'));
    } else {
      const product = new Product(req.body);
      product.save((err, product) => {
        if (err) {
          return next(err);
        }
        res.json(product);
      });
    }
  });
};

/**
 * @function preloadTargetProduct
 * Preload the target product object and assign it to res.locals.targetProduct.
 *
 * @param {string} productId The target product ID
 */
module.exports.preloadTargetProduct = (req, res, next, productId) => {
  if (!mongoose.Types.ObjectId.isValid(productId)) {
    return next(createError(422, 'Invalid product ID'));
  }

  Product.findById(productId)
    .then((targetProduct) => {
      if (!targetProduct) {
        throw createError(422, 'Product ID does not exist');
      }
      res.locals.targetProduct = targetProduct;
      next();
    })
    .catch(next);
};

/**
 * @function getProduct
 * Get the target product
 */
module.exports.getProduct = (req, res, next) => {
  res.status(200).json({ product: res.locals.targetProduct.toJsonFor(req.product) });
};

/**
 * Joi schema for validating updateProduct query
 */
const updateProductSchema = Joi.object({
  name: Joi.string().trim(),
  description: Joi.string().trim(),
  attributes: Joi.array().items(Joi.string().trim()),
  categories: Joi.array().items(Joi.string().trim()),
  tags: Joi.array().items(Joi.string().trim()),
  images: Joi.array().items(Joi.string().trim()),
  thumbnail: Joi.string().trim(),
  price: Joi.number().integer(),
  seller: Joi.string().trim(),
  inventoryQuantity: Joi.number().integer(),
  sku: Joi.string().trim(),
  createdAt: Joi.date(),
  updatedAt: Joi.date()

  // TODO: Images & Thumbnails update validation logic
});

/**
 * @function updatedProduct
 * Update product controller.
 */
module.exports.updateProduct = (req, res, next) => {
  const product = res.locals.targetProduct;
  const update = _.pick(req.body, [
    'name',
    'description',
    'attributes',
    'categories',
    'tags',
    'price',
    'images',
    'thumbnail',
    'seller',
    'inventoryQuantity',
    'sku'
  ]);

  // TODO: add categories, tags, images, thumbnail update logic

  updateProductSchema
    .validateAsync(update)
    .then((payload) => {
      product.set(payload);
      product.save((err, product) => {
        // TODO: User role check

        if (err) {
          return next(createError(400, err.message));
        }
        res.json(product);
      });
    })
    .catch((err) => {
      next(createError(400, err.details[0].message));
    });
};

/**
 *  @function deleteProduct
 *  Delete all products controller.
 *  Only works while in development mode.
 */
module.exports.deleteProducts = (req, res, next) => {
  const NODE_ENV = process.env.NODE_ENV;
  if (NODE_ENV !== 'development') {
    return next(createError(403, 'Forbidden'));
  } else {
    Product.remove({}, (err) => {
      if (err) {
        next(createError(400, err.message));
      } else {
        res.json({ message: 'Products deleted' });
      }
    });
  }
};

/**
 * Joi schema for validating updateProduct and deleteProduct payload
 */
// const updateOrDeleteProductSchema = Joi.object({
//   role: Joi.string().valid(
//     constants.ROLE_ADMIN,
//     constants.ROLE_ROOT,
//     constants.ROLE_SELLER
//   ),
//   status: Joi.string().valid(
//     constants.STATUS_ACTIVE,
//     constants.STATUS_DISABLED,
//     constants.STATUS_UNVERIFIED_EMAIL
//   ),
//   permissions: Joi.object(),
// });

/**
 *
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
module.exports.deleteProduct = (req, res, next) => {
  Product.findByIdAndRemove(req.params.id, (err, product) => {
    // TODO: User role check

    if (err) {
      next(createError(400, err.message));
    } else {
      const product = res.locals.targetProduct;
      res.json(product);
    }
  });
};
