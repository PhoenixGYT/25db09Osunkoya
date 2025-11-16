var express = require('express');
var router = express.Router();

// Require controller modules.
var api_controller = require('../controllers/api');
var tattoo_controller = require('../controllers/tattoo');

/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// Tattoo ROUTES ///
// POST request for creating a Tattoo. 
router.post('/tattoo', tattoo_controller.tattoo_create_post);
// DELETE request to delete Tattoo.
router.delete('/tattoo/:id', tattoo_controller.tattoo_delete);
// PUT request to update Tattoo.
router.put('/tattoo/:id', tattoo_controller.tattoo_update_put);
// GET request for one Tattoo.
router.get('/tattoo/:id', tattoo_controller.tattoo_detail);
// GET request for list of all Tattoo items.
router.get('/tattoo', tattoo_controller.tattoo_list);
module.exports = router