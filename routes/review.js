const express = require('express');
const router = express.Router();
const mongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017/final_project';
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());

router.get('/:restaurant', (req, res, next) => {
    let restaurant = req.params.restaurant;
    var data = { restaurant: `${restaurant}` }
    mongoClient.connect(url, {useNewUrlParser:true},(err, db) => {
        if(err) throw err;
        dbo = db.db('final_project');
        dbo.collection('reviews').find(data).sort({_id: -1}).toArray((err, results) => {
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
            restaurant: req.body.restaurant,
            star: req.body.star,
            title: req.body.title,
            comment: req.body.comment,
            email: req.body.email
        };
        dbo.collection('reviews').insertOne(data, (err, results) => {
            console.log(results);
            if(err) { res.json({ success: false, data: null }); }
            else { res.json({ success: true, data: results }); }
            res.end();
        });
    });
});

router.put('/', (req, res, next) => {
    mongoClient.connect(url, {useNewUrlParser:true},(err, db) => {
        if(err) throw err;
        dbo = db.db('final_project');
        console.log(req.body);
        var id = {
            restaurant: req.body.restaurant,
            email: req.body.email
        };
        var data = {
            star: req.body.star,
            title: req.body.title,
            comment: req.body.comment
        };
        console.log(data);
        dbo.collection('reviews').updateOne(id,{ $set: data }, (err, results) => {
            console.log(results);
            if(err) { res.json({ success: false, data: null }); }
            else { res.json({ success: true, data: results }); }
            res.end();
        });
    });
});

module.exports = router;
