const express= require('express');
const path = require('path');
const bodyparser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const users = require('./routes/users');
const config= require('./config/database');
//connecting to the database
mongoose.connect(config.database);
//testing connection
mongoose.connection.on('error',function(err){
    console.log('Connected to database' + err);
});

//starting express
const app = express();


//Port Number
const port = process.env.port|| 8080;
//cors usage for routing and blocking
app.use(cors());
//Set static folder
app.use(express.static(path.join(__dirname,'public')));
//Body Parser Middleware
app.use(bodyparser.json());
//passport Middleware
app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);
//routing users
app.use('/users',users);
//Index route
app.get('/',function(req,res) {
    res.send('invalid endpoint');
});

app.get('/',function(req,res){
    res.sendFile(path.join(__dirname,'public/index.html'));
});
//start server
app.listen(port,function() {
    console.log('server started on port'+ port);
});
