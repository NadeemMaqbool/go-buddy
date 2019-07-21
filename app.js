const express = require("express");
const app = express();
const exphbs = require("express-handlebars");
const bodyParser = require("body-parser"); 
const path = require("path");
require('./resources/database/connection');

const PORT = 3000;


// app.engine('mustache', mustacheExpress());
// app.set('views', './resources/views');
// app.set('view engine', 'mustache');

app.get('/', function(req, res) {
    res.render("index")
})

///Country Routes
app.use('/country', require('./resources/routes/country-routes'));


app.listen(PORT, function() {
    console.log(`Server has started on port ${PORT}`)
})