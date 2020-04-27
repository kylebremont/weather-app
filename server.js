const {MongoConnector, MongoDB} = require('./server/facade.js');
const express = require('express');
const app = express();
const port = 3001;

// allow cross-origin requests
let allowCrossDomain = function(req, res, next) {
  res.header('Access-Control-Allow-Origin', "*");
  res.header('Access-Control-Allow-Headers', "*");
  next();
}
app.use(allowCrossDomain);

var connector = new MongoConnector();

connector.connect(function(err, db) {
  db = new MongoDB(db);

  app.get('/temps', (req, res) => {
    db.get(req.query.type, query, function(results) {
      res.status(200).send(results);
    });
  });
  
});

