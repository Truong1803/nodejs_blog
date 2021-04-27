const express = require('express');
const SiteController = require('../app/controllers/SiteController');
const router = express.Router();

const newsController = require('../app/controllers/SiteController');

router.get('/search', SiteController.seacrh);
router.get('/', SiteController.index);

module.exports = router;
