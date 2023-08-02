const {allBooks} = require('../controllers/book-controller');

const express = require('express')

const router = express.Router();

router.get('/', allBooks);


module.exports = router;