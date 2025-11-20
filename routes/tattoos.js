var express = require('express');
const tattoo_controllers = require('../controllers/tattoo');
var router = express.Router();

/* GET tattoos */
router.get('/', tattoo_controllers.tattoo_view_all_Page);

/* GET detail tattoo page */
router.get('/detail', tattoo_controllers.tattoo_view_one_Page);

/* GET create tattoo page */
router.get('/create', tattoo_controllers.tattoo_create_Page);

/* GET create update page */
router.get('/update', tattoo_controllers.tattoo_update_Page);

/* GET delete page */
router.get('/delete', tattoo_controlers.tattoo_delete_Page);

module.exports = router;

