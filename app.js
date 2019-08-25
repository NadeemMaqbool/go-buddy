const express = require("express");
const app = express();
const exphbs = require("express-handlebars");
const bodyParser = require("body-parser"); 
const path = require("path");
const { check, validationResult } = require('express-validator');
const session  = require("express-session");


require('./resources/database/connection');

const PORT = 3000;


app.engine('handlebars', exphbs({defaultLayout: 'backend'}));
app.set('views',  path.join(__dirname, 'resources/views'));
app.set('view engine', 'handlebars');

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.use(express.static(path.join(__dirname, 'resources/public')));
app.use(session ({secret: 'avara', saveUninitialized: false, resave: false}));

app.get('/', function(req, res) {
    res.render("search")
})

///Country Routes
app.use('/country', require('./resources/routes/country-routes'));
app.use('/admin', require('./resources/routes/admin-routes'));

app.listen(PORT, function() {
    console.log(`Server has started on port ${PORT}`)
})