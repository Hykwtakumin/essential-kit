import 'dotenv/config';
import * as express from 'express';
import * as path from 'path';
import * as favicon from 'serve-favicon';
import * as cookieParser from 'cookie-parser';
import * as session from 'express-session';
import * as flash from 'connect-flash';
import * as bodyParser from 'body-parser';
import * as csrf from 'csurf';

const routes = require('./routes/web');
const db = require('./database/db');

const app = express();
const PORT  = process.env.PORT || 3000;
// View Engine
app.set('view engine', 'pug');
// Set Middlewares for security
app.use(cookieParser());
// Set session
app.use(session({
    secret: 'keyboard',
    resave: true,
    saveUninitialized: true,
    cookie: { secure: true }
}));

// BodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// CSRF
app.use(csrf({ cookie: true }));

// Set public static path
app.use(express.static(path.join(__dirname, './public')));

// Set favicon
app.use(favicon(path.join(__dirname, './public', 'favicon.ico')));

// Routes Middleware
app.use(routes);

// Catch 404
app.use((req, res) => {
    res.status(404)
    res.render('404')
});

//Serve Application
app.listen(PORT, (req, res, next) => {
    console.log('now serving on port ' + PORT)
})

module.exports = app;

