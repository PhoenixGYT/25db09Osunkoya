var express = require('express');
const tattoo_controllers = require('../controllers/tattoo');
var router = express.Router();

// middleware to protect routes
const secured = (req, res, next) => {
    if (req.user) {
    return next();
    }
    res.redirect("/login");
};

/* GET tattoos */
router.get('/', tattoo_controllers.tattoo_view_all_Page);

/* GET detail tattoo page */
router.get('/detail', tattoo_controllers.tattoo_view_one_Page);

/* GET create tattoo page */
router.get('/create', tattoo_controllers.tattoo_create_Page);

/* GET update tattoo page */
router.get('/update', secured, tattoo_controllers.tattoo_update_Page);

/* GET delete page */
router.get('/delete', tattoo_controllers.tattoo_delete_Page);

module.exports = router;
