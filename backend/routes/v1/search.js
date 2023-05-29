const express = require('express');
const router = express.Router();

const { v1 } = require('../../controllers')

router.get('/', v1.search.searchCategory);

module.exports = router;