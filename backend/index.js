const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 4000;
const router = express.Router();
const path = require('path');
const publicPath = path.join(__dirname, '..', 'build');
require('./models/model');
require('./models/user');
require('./models/group')
const mongoose = require('mongoose');
const {ObjectId} = mongoose.Types.ObjectId;
const {MONGOURI} = require('./keys');
const Todo = mongoose.model("Todo");
const User = mongoose.model("User");
const Group = mongoose.model("Group");
const MongoClient = require('mongodb').MongoClient;
let id = null;
const whitelist = ['http://localhost:3000','http://localhost:3001', 'http://localhost:4000', 'https://react-todo-17.herokuapp.com']; // list of allow domain
const _id = null;
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

app.get('/signup', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
})

app.get('/creategroup', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
})

app.post('/createGroup', (req, res) => {
    console.log('hello from create group!');

    let {createdBy, title, oneTask, twoTask, threeTask, storageId} = req.body;
    const group = new Group();
    // console.log('this is groupId ');
    group.createdBy = storageId;
    group.title = title;
    group.groupTask = [
        {id: storageId, task: oneTask, completed: false},
        {id: storageId, task: twoTask, completed: false},
        {id: storageId, task: threeTask, completed: false},
    ];

    // console.log('successfully created object');
    group.save().then(result => {
        res.json({groups: result})
    }).catch(err => console.log(err))
    // console.log('group saved');
});

app.post('/mygroups', (req, res) => {
    // console.log('hello from my groups!')
    let { id } = req.body;
    
    MongoClient.connect(MONGOURI, { useUnifiedTopology: true}, (err, db) => {
        if (err) throw err;
        var dbo = db.db('<dbname>');
        let cursor = dbo.collection("groups");
        cursor.find({ createdBy: ObjectId(`${id}`) }).toArray().then(result => {
            // console.log('this is my groups result ', result);
            res.json(result);
            db.close();
        })
    })
})

app.post('/signup', (req, res) => {

    let { u, e, p} = req.body;
    const user = new User();
    user.username = u;
    user.email = e;
    user.password = p;
    user.save().then(result => {
        res.json({user: result})
    }).catch(err => console.log(err));
})

app.post('/postData', async (req, res) => {
    await getId();
    let { id, task } = req.body;

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
            res.json(result);
            db.close();
        })
      });
})

app.post('/delete', (req, res) => {
    res.send('successfully called delete');
    MongoClient.connect(MONGOURI, {useUnifiedTopology: true}, (err, db) => {
        if(err) throw err;
        var dbo = db.db("<dbname>");
        let collection = dbo.collection("todos");
        collection.deleteOne({
            "id": req.body.id,
        })
        db.close();
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
        db.close();
    })
});

app.put('/updateTask', async (req, res) => {
    let _id = req.body.id;
    let _task = req.body.task;
    let _index = req.body.index;
    console.log(req.body);

    await MongoClient.connect(MONGOURI, {useUnifiedTopology: true}, (err, db) => {
        if (err) throw err;
        let dbo = db.db('<dbname>');
        let cursor = dbo.collection('groups');
        // cursor.find({"_id": ObjectId(`${_id}`)}).forEach(value => {
        //     if(value.groupTask){
        //         value.groupTask.forEach((property, i) => {
        //             if(property.task === _task){
        //                 property.completed = !property.completed;
        //                 console.log('bool ', property.completed);
        //                 res.send(property);
        //             }
        //         })
        //     }
       
        //     db.close();
        // })

        cursor.updateOne({"_id": ObjectId(`${_id}`)}, {$set: {[`groupTask.${_index}.completed`] : true}});
    })
})

app.get('/signIn', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
});

app.post('/signInApp', (req, res) => {
    console.log('this is post incoming ', req.body)
    MongoClient.connect(MONGOURI, {useUnifiedTopology: true}, (err, db) => {
        if (err) throw err;
        var dbo = db.db('<dbname>');
        let cursor = dbo.collection('users');
        cursor.find({email: req.body.email})
            .toArray()
                .then(result => {
                    console.log('this is returning post result ', result)
                    res.json(result);
                    db.close();
        })
    })
})

app.get('/dashboard', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
})

