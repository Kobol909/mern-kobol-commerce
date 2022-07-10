/*
 * Define the schema for the product model
 * ========================================
 *
 */

const mongoose = require('mongoose');
const Joi = require('joi');
const _ = require('lodash');

const config = require('../config');
const constants = require('../core/constants');

const attribute = require('./attribute');
const category = require('./category');
const tag = require('./tag');
const review = require('./review');

// Define Schema
const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      required: 'Name is required',
    },
    description: {
      type: String,
      required: true,
      required: 'Description is required',
    },
    attributes: {
      type: [String],
      attribute,
    },
    categories: {
      type: [String],
      category,
    },
    tags: {
      type: [String],
      tag,
    },
    images: {
      type: [String],
    },
    thumbnail: {
      type: [String],
    },
    price: {
      type: Number,
      required: true,
      required: 'Price is required',
    },
    reviews: {
      type: [String],
      review,
    },
    seller: {
      type: String,
      ref: 'role',
      required: true,
    },
    inventoryQuantity: {
      type: Number,
    },
    sku: {
      type: String,
      required: true,
      required: 'SKU is required',
    },
  },
  { timestamps: true }
);

/**
 * @returns {object} The product object
 */
productSchema.methods.toJsonFor = function (product) {
  const {
    id,
    name,
    description,
    attributes,
    categories,
    tags,
    images,
    thumbnail,
    price,
    reviews,
    seller,
    inventoryQuantity,
    sku,
  } = this;
  const productObj = this.toObject();
  if (id === this.id) {
    const provider = _.mapValues(productObj.provider, (p) => {
      return _.pick(p, ['productId', 'attributes', 'categories', 'tags']);
    });
    return {
      // id: id,
      name: name,
      description: description,
      // attributes: attributes,
      // categories: categories,
      // tags: tags,
      provider: provider,
      images: images,
      thumbnail: thumbnail,
      price: price,
      reviews: reviews,
      seller: seller,
      inventoryQuantity: inventoryQuantity,
      sku: sku,
    };
  } else {
    // error message
    `Sorry, there is no product with that id: ${product._id} in the database.`;
  }
};

mongoose.model('Product', productSchema);
