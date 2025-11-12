var express = require('express');
const tattoo_controllers = require('../controllers/tattoo');
var router = express.Router();

/* GET tattoos */
router.get('/', tattoo_controllers.tattoo_view_all_Page);
module.exports = router;
