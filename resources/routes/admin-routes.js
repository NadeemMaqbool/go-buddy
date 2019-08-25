const express = require("express");
const router = express.Router();
const db = require("../database/connection");
const countryModel = require("../models/Country");
const { check, validationResult } = require('express-validator');
const { matchedData, sanitizeBody } = require('express-validator');



/** get all the countries list */
router.get('/country', (req, res) => {
    countryModel.findAll(
        { raw: true }).then((countryData) => {
        res.render("list_countries", { countryData: countryData });
    });
    
});

router.get('/country/new', (req, res) => {
    req.session.errors = null; 
    res.render("add_country");
    
});

router.post('/country/save', [
    check('short_name','Short name cannot be empty').not().isEmpty(),
    check('long_name','Long name cannot be empty').not().isEmpty(),
    check('long_name','Long name should be less than 30 characters').isLength({ max: 30 })
  ],(req, res) => {
    const errors = validationResult(req);
    
    if (!errors.isEmpty()) {
      const validData = matchedData(req);
      req.session.errors = errors;
      req.session.success = false;   
      
      res.render("add_country", { success: req.session.success, derrors: req.session.errors.errors , validData: validData})
      
    }else{
        const data = {
            short_name : req.body.short_name,
            long_name : req.body.long_name,
            continent: req.body.continent,
        };
        countryModel.create(data).then( () => 
            res.redirect('/admin/country')     
        );    
    }
    
    
});


/** Add country in to DB */

module.exports= router;