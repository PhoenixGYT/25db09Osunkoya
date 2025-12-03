// controllers/tattoo.js
const Tattoo = require('../models/tattoo');

// Get details for a specific Tattoo
exports.tattoo_detail = async function (req, res) {
console.log("detail " + req.params.id);
try {
    const result = await Tattoo.findById(req.params.id);
    if (!result) {
    return res.status(404).json({ error: `Document for id ${req.params.id} not found` });
    }
    res.json(result);
} catch (err) {
    res.status(500).json({ error: err.message });
}
};

// Delete a Tattoo
exports.tattoo_delete = async function (req, res) {
console.log("delete " + req.params.id);
try {
    const result = await Tattoo.findByIdAndDelete(req.params.id);
    if (!result) {
    return res.status(404).json({ error: `Document for id ${req.params.id} not found` });
    }
    console.log("Removed " + result);
    res.json(result);
} catch (err) {
    res.status(500).json({ error: err.message });
}
};

// Handle a delete one view with id from query
exports.tattoo_delete_Page = async function(req, res) {
    console.log("Delete view for id " + req.query.id);
    try {
        const result = await Tattoo.findById(req.query.id);
        res.render('tattoodelete', { title: 'Delete Appointment', toShow: result });
    } catch (err) {
        res.status(500).send({ error: err.message });
    }
};


// Update a Tattoo

// Handle building the view for updating a costume.
// query provides the id
exports.tattoo_update_Page = async function(req, res) {
console.log("update view for item "+req.query.id)
try{
let result = await Tattoo.findById(req.query.id)
res.render('tattooupdate', { title: 'Tattoo Update', toShow: result });
}
catch(err){
res.status(500)
res.send(`{'error': '${err}'}`);
}
};

// List all Tattoos
exports.tattoo_list = async function (req, res) {
try {
    const theTattoos = await Tattoo.find();
    res.json(theTattoos);
} catch (err) {
    res.status(500).json({ error: err.message });
}
};

// Render view of all Tattoos
exports.tattoo_view_all_Page = async function (req, res) {
try {
    const theTattoos = await Tattoo.find();
    res.render('tattoos', {
    title: 'Tattoo Appointment Search Results',
    results: theTattoos
    });
} catch (err) {
    res.status(500).json({ error: err.message });
}
};

// Create a Tattoo (POST)
exports.tattoo_create_Page = async function (req, res) {
console.log(req.body);
let document = new Tattoo({
    customer: req.body.customer,
    duration: req.body.duration,
    cost: req.body.cost,
    colored: req.body.colored === "on" || req.body.colored === true
});

try {
    const result = await document.save();
    res.json(result);
} catch (err) {
    res.status(500).json({ error: err.message });
}
};

// Render view for one Tattoo
exports.tattoo_view_one_Page = async function (req, res) {
console.log("single view for id " + req.query.id);
try {
    const result = await Tattoo.findById(req.query.id);
    if (!result) {
    return res.status(404).json({ error: `Document for id ${req.query.id} not found` });
    }
    res.render('tattoodetail', {
    title: 'Tattoo Appointment Details',
    toShow: result
    });
} catch (err) {
    res.status(500).json({ error: err.message });
}
};
