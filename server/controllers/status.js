/**
 *  Status Controller
 *  =================
 *
 *  GET     /api/status
 *
 */
const express = require('express');
const router = express.Router();
const Joi = require('joi');

require('dotenv').config();

const port = process.env.SERVER_PORT;
const status = {
  status: 'API is running',
  port: port
};

/**
 *  Joi schema for validating getStatus query
 */
const getStatusSchema = Joi.object({
  status: Joi.string().valid(status.status).required(),
  port: Joi.number().required()
});

module.exports.getStatus = router.get('/', (req, res) => {
  if (res.statusCode === 200) {
    res.status(200).json(status);
  } else {
    res.status(400).json('API could not be reached');
  }
});
