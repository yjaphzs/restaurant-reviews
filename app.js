const express = require('express');
const app = express();
const port = process.env.port || 8080;
const morgan = require('morgan');
app.use(morgan('dev'));

const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

const routeUser = require('./routes/user');
const routeReview = require('./routes/review');
const routeMap = require('./routes/map');

app.use(express.static('assets'));
app.use(express.static(path.join(__dirname, 'views')));

app.set('view engine', 'ejs');
app.use('/user', routeUser);
app.use('/review', routeReview);
app.use('/map', routeMap);

app.get('/', (req, res) => {
    res.render('pages/index',  {Title: 'Home'});
});

app.get('/login', (req, res) => {
    res.render('pages/login',  {Title: 'Login'});
});

app.get('/register', (req, res) => {
    res.render('pages/register',  {Title: 'Register'});
});

app.get('/restaurants', (req, res) => {
    res.render('pages/restaurants',  {Title: 'Restaurants'});
});

app.listen(port, (err) => {
    if(err) throw err;
    console.log(`Running at localhost:${port}`);
});
