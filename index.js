var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var formRoutes = require('./src/routes/formRoutes'); 
var path = require('path');

var PORT = 3000;
var app = express();

// Middleware
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Set EJS as the template engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Routes
app.use('/api', formRoutes);

// Start the server
app.listen(PORT, function() {
    console.log('Server is running on port ' + PORT);
});
