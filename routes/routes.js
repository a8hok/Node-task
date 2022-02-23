const router = require('express').Router();

const { fetchComments } = require('../controllers/fetch');


router.get('/populate', fetchComments);

module.exports = router;
