const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const mongoose = require("mongoose");

//const indexRouter = require('./routes/index');
//const usersRouter = require('./routes/users');

// mongo
const usersRouter_mongo = require("./routes/mongo/users");
const ProductRouter_mongo = require("./routes/mongo/Product");

const app = express();

mongoose.connect("mongodb+srv://admin:rmutl1234@cluster0.dl9wq.mongodb.net/rmutl?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
});

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//app.use('/', indexRouter);
//app.use('/users', usersRouter);

// mongo
app.use("/mongo", usersRouter_mongo);
app.use("/mongo", ProductRouter_mongo);

module.exports = app;