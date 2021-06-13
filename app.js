const express = require('express');
const mongoose = require("mongoose");
const pageRoute = require('./routes/pageRoute');
const userRoute = require('./routes/userRoute');
const session = require('express-session');
const MongoStore = require('connect-mongo');

const app = express();

//connetct db
mongoose.connect('mongodb://localhost/misfit_db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
}).then(()=>{
    console.log("db connected")
});

//Template engine
app.set('view engine', 'ejs');


//Global veriables
global.userIN = null;


//Middlewares

app.use(express.static('public'));
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(
  session({
    secret: 'my_keyboard_cat',
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({ mongoUrl: 'mongodb://localhost/misfit_db' }),
  })
);
app.use('*', (req, res, next) => {
  userIN = req.session.userID;
  next();
});



app.use('/', pageRoute);
app.use('/users', userRoute);


const port = 3000;
app.listen(port, () => {
  console.log(`App started on port ${port}`);
});