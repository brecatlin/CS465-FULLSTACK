const mongoose = require('mongoose');
const Trip = require('../models/travlr'); 
const Model = mongoose.model('trips');

// GET: /trips - lists all the trips
const tripsList = async (req, res) => {
    const q = await Model
        .find({}) // No filter, return all records
        .exec();

    // Uncomment to log the results of the query to the console
    // console.log(q);

    if (!q) { // Check if the result array is empty
        // Database returned no data
        return res
            .status(404)
            .json(err);
    } else {
        // Return resulting trip list
        return res
            .status(200)
            .json(q);
    }
};

// GET: /trips/:tripCode - lists a single trip by code
const tripsFindByCode = async (req, res) => {
    const q = await Model
        .find({'code': req.params.tripCode}) // Return single record based on 'code'
        .exec();

    // Uncomment to log the results of the query to the console
    // console.log(q);

    if (!q) { // Check if the result array is empty
        // Database returned no data
        return res
            .status(404)
            .json(err);
    } else {
        // Return resulting trip list
        return res
            .status(200)
            .json(q);
    }
};

module.exports = {
    tripsList,
    tripsFindByCode
};
