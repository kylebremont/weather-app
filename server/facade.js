const mongo = require('mongodb').MongoClient;

class MongoConnector {

    constructor() {
        this.url = 'mongodb+srv://kylebremont:weatherapp@cluster0-t12le.gcp.mongodb.net/test?retryWrites=true&w=majority'
    }

    connect(callback) {
        mongo.connect(this.url, { useNewUrlParser: true, useUnifiedTopology: true }, function(err, db) {
            if (err) {
                console.log('Unable to connect to MongoDB Error: ', err);
                return;
            }
            console.log('Connected to MongoDB');

            callback(err, db);
        });
    }

}

class MongoDB {

    constructor(db) {
        this.db = db;
        this.db_name = 'weather_data';
        this.instance = this.db.db(this.db_name);
    }

    get(collection, query, callback) {
        this.instance.collection(collection).find(query).toArray()
        .then(data => {
            try {
                data = jsonify(data);
            } catch {
                // empty data obect
            }
            callback(data);
        })
        .catch(error => console.error(error))
    }

}

function jsonify(data) {
    var stringobj = JSON.stringify(data);
    stringobj = stringobj.substring(1, stringobj.length-1);
    return JSON.parse(stringobj);
}

exports.MongoConnector = MongoConnector;
exports.MongoDB = MongoDB;