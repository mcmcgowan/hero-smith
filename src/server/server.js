const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
//const logger = require('morgan')
//controllers

const app = express();

const PORT = precess.env.PORT || '3000';

//app.use(logger(':date[clf] :method :url :status :response-time ms - :res[content-length]'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));
app.use(express.static(path.join(__dirname, '../../dist')));
app.use((req, res, next) => { console.log(req.body); next(); });

//routes

//error handling
//catch 404
app.use(function(req, res, next) { //TODO: serve a unique 404 page
    const err = new Error('Not Found'); 
    err.status = 404;
    next(err);
})

//global error handler
app.use(function(err, req, res, next) {
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    console.log(err);
    res.status(err.status || 500).send(res.locals.message)
});

app.listen(PORT, (err) => {
    console.log(new Date(), err || 'server listening on port ' + PORT);
});