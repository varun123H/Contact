const express = require('express');
const app = express();
const port = 8080;
const mongoose = require('mongoose');
const path = require('path');
var bodyarser = require('body-parser');
app.use(bodyarser.json());
app.use(bodyarser.urlencoded({ extended: true }));

app.use(express.static(path.join('views')));

app.get('/', (req,res) =>{
    res.sendFile(__dirname,'views' , 'index.html');
})

mongoose.connect("mongodb://localhost:27017/contact" , {useNewUrlParser:true , useUnifiedTopology:true})
    .then(()=>{
        console.log('Database connected successfully')
    }).catch((err) =>{
        console.log(err)
    });

    var nameSchema = new mongoose.Schema({
        uName: String,
        uSex: String
      });
     
    var User = mongoose.model("User", nameSchema);

    app.post("/add", (req, res) => {
        var myData = new User(req.body);
        myData.save()
          .then(item => {
            res.send("item saved to database");
          })
          .catch(err => {
            res.status(400).send("unable to save to database");
          });
      });

app.listen(port, () =>{
    console.log('Server started on port',8080);
});



