const express = require('express');
const app = express();
const bodyParser = require('body-parser');
// const cors = require('cors');

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.static('public'));
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(cors());
app.use(bodyParser.json());

// installations  : -----------------
//npm  init
//npm i mongoose 
//npm i express
//npm i
// npm i nodemailer


// main
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});
// new lead route
const leadsRouter = require('./public/js/routes/newLeadRouter');
app.use("/newLeadRouter", leadsRouter);

//END ROUTERS/////////////////////////////////////////////////////////////////////////////


//conections ////////////////////////////////////////////////////////////////////////////////////////////
//server conection------------------
let port = process.env.PORT || 3000;
app.listen(port, function () {
    console.log('-------------------------> server conected to port: ', port, '!<---------------------------------------------------------')
})

//connect mongoDB---------------------------------------------------------------
const mongoose = require('mongoose');//npm i mongoose
const url = "mongodb://chicco:qqwwee123@cluster0-shard-00-00-hn1ba.mongodb.net:27017,cluster0-shard-00-01-hn1ba.mongodb.net:27017,cluster0-shard-00-02-hn1ba.mongodb.net:27017/TST?replicaSet=Cluster0-shard-0&ssl=true&authSource=admin";
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('------------------------------> MongoDB conected as well! <---------------------');
});