const express = require('express');
const SiteController = require('../app/controllers/SiteController');
const router = express.Router();

const newsController = require('../app/controllers/SiteController');

router.use('/search', SiteController.seacrh);
router.use('/', SiteController.index);


module.exports = router;