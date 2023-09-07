const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

//static file 
app.use(express.static(__dirname + 'public/css'))
app.use(express.static(__dirname + 'public/js'))

app.set('view engine', 'ejs');
app.use(express.static('public'))

//middle ware
const userRouter = require('./routes/user');
app.use('/',userRouter);

// port
app.listen(port,()=> console.log(`App listening on port ${port}`));


