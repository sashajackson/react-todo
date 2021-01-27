const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 4000;
const router = express.Router();
const path = require('path');
const publicPath = path.join(__dirname, '..', 'build');
require('./models/model');
const mongoose = require('mongoose');
const {MONGOURI} = require('./keys');
const Todo = mongoose.model("Todo");
const MongoClient = require('mongodb').MongoClient;
let id = null;
const whitelist = ['http://localhost:3000','http://localhost:3001', 'http://localhost:4000', 'https://react-todo-17.herokuapp.com']; // list of allow domain

const corsOptions = {
    origin: whitelist,
    credentials: true,
    methods: ['GET', 'POST', 'OPTIONS', 'PUT', 'DELETE']
}

// const test = path.join(__dirname, '..', 'test.html');
app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(express.static(publicPath));
// app.use('/', router);
const base = 'https://react-todo-17.herokuapp.com';




mongoose.connect(MONGOURI,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
mongoose.connection.on('connected', () => {
    console.log('connected to mongo!');
});
mongoose.connection.on('error', (err) => {
    console.log('err connecting', err);
});

app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
  });

  getId = async () => {
    await MongoClient.connect(MONGOURI, { useUnifiedTopology: true}, (err, db) => {
        const dbo = db.db("<dbname>");
        dbo.collection("todos").find({})
        .toArray(function(err, result) {
            if (err) throw err;
            console.log('this is id ', id);
            id = result.length;
            return id;
          });
    })
};

app.get('/', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
})


app.post('/postData', async (req, res) => {
    await getId();
    let { id, task } = req.body;
    console.log('this is req.body id', req.body.id);
    if(!task){
        return res.status(422).json({error:"please enter task"})
    }
        const post = new Todo({
            id: ++id,
            task: task,
            completed: false,
        })
    
        post.save().then(result => {
        res.json({post:result});
        }).catch(error => {
        console.log(error);
        })

        return;
});

app.get('/getData', async (req, res) => {
    console.log('served data to user');
    await MongoClient.connect(MONGOURI,{ useUnifiedTopology: true }, function(err, db) {
        if (err) throw err;
        var dbo = db.db("<dbname>");
        let collection = dbo.collection("todos");
        let cursor = collection.find({}).toArray();
        cursor.then(result => {
            // console.log('this is result in cursor ', result);
            res.json(result);
            db.close();
        })
      });
})

app.post('/delete', (req, res) => {
    console.log('initiating complete..');
    console.log('this is request body ', req.body)
    console.log('this is request body id ', req.body.id)
    res.send('successfully called delete');
    MongoClient.connect(MONGOURI, {useUnifiedTopology: true}, (err, db) => {
        if(err) throw err;
        var dbo = db.db("<dbname>");
        let collection = dbo.collection("todos");
        collection.deleteOne({
            "id": req.body.id,
        })
    })
});

app.put('/updateComplete', (req, res) => {
    let _id = req.body.properties.id;
    let _complete = req.body.properties.complete;
    MongoClient.connect(MONGOURI, {useUnifiedTopology: true}, function(err, db){
        if(err) throw err;
        let dbo = db.db('<dbname>');
        dbo.collection("todos").updateOne({"id": _id}, {$set: {"completed": _complete}});
        res.send({
            id: id,
            completed: _complete
        })
    })
});
