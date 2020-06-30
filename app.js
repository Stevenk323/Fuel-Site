//create express app
const express = require('express');
const app = express();

//allow the use of ejs
app.set('view engine', 'ejs');

//images middlware/staticfiles
app.use(express.static('public'));


//get links
    //index
app.get('/', (req,res) => {
    res.render('index', { page: 'Home'});
});
    //quote
app.get('/quote', (req,res) => {
    res.render('quote', { page: 'Get Quote' });
});
    //login
app.get('/login', (req,res) => {
    res.render('login', { page: 'Login' });
});
    //register
app.get('/register', (req,res) => {
    res.render('register', { page: 'Sign Up' });
});
    //profile
app.get('/profile', (req,res) => {
    res.render('profile', { page: 'Profile' });
});
    //quote history
app.get('/quote_history', (req,res) => {
    res.render('quote_history', { page: 'Quote History' });
});
/*
    //404
app.use((req,res) => {
    res.render('404', {page: '404 Page Not Found'});
});
*/


//listen for requests at localhost:3000
app.listen(3000);