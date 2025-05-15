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
        dbo.collection('reviews').find(data).limit(5).sort({_id:-1}).toArray((err, results) => {
            if(err) { res.json({ success: false, data: null }); }
            else { res.json({ success: true, data: results }); }
            res.end();
        });
    });
});

module.exports = router;
