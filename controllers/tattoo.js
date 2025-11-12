const tattoo = require('../models/tattoo');
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

// List of all Tattoos
exports.tattoo_list = async function(req, res) {
    try{
    theTattoos = await Tattoo.find();
    res.send(theTattoos);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    } 
};

// VIEWS 
// Handle a show all view
exports.tattoo_view_all_Page = async function(req, res) {
    try{
        theTattoos = await Tattoo.find();
        res.render('tattoos', { title: 'Tattoo Search Results', results: theTattoos });
        }
        catch(err){
        res.status(500);
        res.send(`{"error": ${err}}`);
    }  
};

// Handle tattoo create on POST.
exports.tattoo_create_post = async function(req, res) {
    console.log(req.body)
    let document = new Tattoo();
 // We are looking for a body, since POST does not have query parameters.
 // Even though bodies can be in many different formats, we will be picky
 // and require that it be a json object
 // {"costume_type":"goat", "cost":12, "size":"large"}
    document.tattoo_customer = req.body.tattoo_customer;
    document.tattoo_duration = req.body.tattoo_duration;
    document.tattoo_cost = req.body.tattoo_cost;
    document.tattoo_colored = req.body.tattoo_colored;

    try{
        let result = await document.save();
        res.send(result);
        }
        catch(err){
        res.status(500);
        res.send(`{"error": ${err}}`);
    } 
};
