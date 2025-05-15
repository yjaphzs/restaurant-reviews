const express = require('express');
const router = express.Router();
const mongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017/final_project';
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());

router.get('/:email', (req, res, next) => {
    let email = req.params.email;
    var data = { email: `${email}` }
    console.log(data);
    mongoClient.connect(url, {useNewUrlParser:true},(err, db) => {
        if(err) throw err;
        dbo = db.db('final_project');
        dbo.collection('users').find(data).toArray((err, results) => {
            if(err) { res.json({ success: false, data: null }); }
            else { res.json({ success: true, data: results }); }
            res.end();
        });
    });
});

router.get('/:email/:password', (req, res, next) => {
    let email = req.params.email;
    let password = req.params.password;
    var data = {
        email: `${email}`,
        password: `${password}`
    }
    console.log(data);
    mongoClient.connect(url, {useNewUrlParser:true},(err, db) => {
        if(err) throw err;
        dbo = db.db('final_project');
        dbo.collection('users').find(data).toArray((err, results) => {
            if(err) { res.json({ success: false, data: null }); }
            else { res.json({ success: true, data: results }); }
            res.end();
        });
    });
});

router.post('/', (req, res, next) => {
    mongoClient.connect(url, {useNewUrlParser:true},(err, db) => {
        if(err) throw err;
        dbo = db.db('final_project');
        var data = {
            email: req.body.email,
            password: req.body.password,
            name: req.body.name
        };
        dbo.collection('users').insertOne(data, (err, results) => {
            console.log(results);
            if(err) { res.json({ success: false, data: null }); }
            else { res.json({ success: true, data: results }); }
            res.end();
        });
    });
});

module.exports = router;
