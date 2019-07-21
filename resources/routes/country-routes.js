const express = require("express");
const router = express.Router();
const db = require("../database/connection");
const countryModel = require("../models/Country");


/** get all the countries list */
router.get('/', (req, res) => 
    countryModel.findAll()
        .then(countries => {
             console.log(countries);
             res.sendStatus(200);   
        }).catch(err => console.log(err))
);

/** Add country in to DB */

module.exports= router;