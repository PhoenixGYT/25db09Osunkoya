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
exports.tatto_delete_Page = async function(req, res) {
    console.log("Delete view for id " + req.query.id)
    try{
        result = await Tattoo.findById(req.query.id)
        res.render('tattoodelete', { title: 'Delete Appointment', toShow: result });
    }
    catch(err){
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
}

// Update a Tattoo
exports.tattoo_update_put = async function (req, res) {
console.log(`update on id ${req.params.id} with body ${JSON.stringify(req.body)}`);
try {
    let toUpdate = await Tattoo.findById(req.params.id);
    if (!toUpdate) {
    return res.status(404).json({ error: `Document for id ${req.params.id} not found` });
    }

    if (req.body.customer) toUpdate.customer = req.body.customer;
    if (req.body.duration) toUpdate.duration = req.body.duration;
    if (req.body.cost) toUpdate.cost = req.body.cost;
    if (req.body.colored !== undefined) {
    // normalize checkbox values
    toUpdate.colored = req.body.colored === "on" || req.body.colored === true;
    }

    const result = await toUpdate.save();
    console.log("Success " + result);
    res.json(result);
} catch (err) {
    res.status(500).json({ error: err.message });
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
exports.tattoo_create_post = async function (req, res) {
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
