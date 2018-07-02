import * as express from 'express';
import * as csrf from 'csurf';
const Route = express();
let form = require('../controllers/form-controller');

// Get index.pug
Route.get('/', (req, res, next) => {
    res.render('index')
});

// Get form.pug and pass the csrf token
Route.get('/form', (req, res, next) => {
    const csrfToken = req.body._csrf;
    res.render('form', { csrfToken })
});

// Post request for form data
Route.post('/form', form.save);

module.exports = Route;
