/**
 *  Status routes
 *  =================
 *  GET     /api/status
 */
const express = require('express');
const router = express.Router();
const statusCtr = require('../../controllers/status');

router.get('/', statusCtr.getStatus);

module.exports = router;
