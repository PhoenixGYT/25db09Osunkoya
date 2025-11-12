var Tattoo = require('../models/tattoo');
// List of all tattoos
exports.tattoo_list = function(req, res) {
 res.send('NOT IMPLEMENTED: Tattoo list');
};
// for a specific Tattoo.
exports.tattoo_detail = function(req, res) {
 res.send('NOT IMPLEMENTED: Tattoo detail: ' + req.params.id);
};
// Handle Tattoo create on POST.
exports.tattoo_create_post = function(req, res) {
 res.send('NOT IMPLEMENTED: Tattoo create POST');
};
// Handle Tattoo delete from on DELETE.
exports.tattoo_delete = function(req, res) {
 res.send('NOT IMPLEMENTED: Tattoo delete DELETE ' + req.params.id);
};
// Handle Tattoo update form on PUT.
exports.tattoo_update_put = function(req, res) {
 res.send('NOT IMPLEMENTED: Tattoo update PUT' + req.params.id);
};
