const express = require('express');
const app = express();
const port = 8080;
const mysit = require('./db/db');
const path = require('path');
const mongoose = require('mongoose');

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'views')));

app.get('/' , (req,res) =>{
    res.sendFile(path.join(__dirname, 'views','index.html'));
});

var User = mongoose.model("User", mysit.nameSchema);

app.post("/add", (req, res) => {
    var myData = new User(req.body);
    myData.save()
    .then(() => {
    res.send("Item saved to database");
    })
    .catch(err => {
    res.status(400).send(err);
    });
   });

console.log(mysit.dbConnect);
app.listen(port, () =>{
    console.log('Server started on port',8080);
});



