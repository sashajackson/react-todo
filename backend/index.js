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
const corsOptions = {
    origin: "https://react-todo-17.herokuapp.com",
}
// app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(express.static(publicPath));
app.options('*', cors());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Credentials", true);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use('/', router);


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

  let id = null;
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

router.get('/', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
})


router.post('/postData', async (req, res) => {
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

router.get('/getData', cors(corsOptions), (req, res) => {
    MongoClient.connect(MONGOURI,{ useUnifiedTopology: true }, function(err, db) {
        if (err) throw err;
        var dbo = db.db("<dbname>");
        // dbo.collection("todos").find({}).toArray(function(err, result) {
        //   if (err) throw err;
        //   let final = result;
        //   res.send(final);
        //   db.close();
        // });
        dbo.collection("todos").find({}).toArray()
        .then((result) => {
            res.send("hello world");
            db.close();
        })


      });
})

router.put('/updateComplete', (req, res) => {
    let _id = req.body.properties.id;
    let _complete = req.body.properties.complete;
    MongoClient.connect(MONGOURI, {useUnifiedTopology: true}, function(err, db){
        if(err) throw err;
        let dbo = db.db('<dbname>');
        //next step
        dbo.collection("todos").updateOne({"id": _id}, {$set: {"completed": _complete}});
        res.send({
            id: id,
            completed: _complete
        })
    })
});
