const {MongoConnector, MongoDB} = require('./server/facade.js');
const express = require('express');
const app = express();
const port = 3500;

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

  // endpoint returns all of the weather data in db
  app.get('/weather', (req, res) => {
    db.get("weather", {}, function(results) {
      res.status(200).send(results);
    });
  });
  
});

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log('Listening on port ' + port));