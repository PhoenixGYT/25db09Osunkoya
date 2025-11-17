var express = require('express');
const tattoo_controllers = require('../controllers/tattoo');
var router = express.Router();

/* GET tattoos */
router.get('/', tattoo_controllers.tattoo_view_all_Page);

/* GET detail tattoo page */
router.get('/detail', tattoo_controllers.tattoo_view_one_Page);


module.exports = router;
