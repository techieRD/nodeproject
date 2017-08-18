// create a router

var express = require('express');
var dbRouter = express.Router();
var mongodb = require('mongodb').MongoClient;

var eventsData = [ {
    name: 'Event 1',
    description: 'The first event',
    date: '2016.03.03',
    time: '3:00 PM',
    duration: '3 hours',
    location: {
        streetAddr:'303 Main St',
        city: 'Los Angeles',
        state: 'CA',
        zip: '87885',
        lon: 0,
        lat: 0
        },
    capacity: 300
    },
    {
    name: 'Event 2',
    description: 'The second event',
    date: '2016.01.01',
    time: '1:00 PM',
    duration: '1 hour',
    location: {
        streetAddr:'202 Main St',
        city: 'Los Angeles',
        state: 'CA',
        zip: '87885',
        lon: 0,
        lat: 0
        },
    capacity: 300
    },
    {
    name: 'Event 3',
    description: 'The third event',
    date: '2016.07.013',
    time: '5:00 PM',
    duration: '2 hours',
    location: {
        streetAddr:'303 Main St',
        city: 'Los Angeles',
        state: 'CA',
        zip: '87885',
        lon: 0,
        lat: 0
        },
    capacity: 300
    },
    
    {
    name: 'Event 4',
    description: 'The fourth event',
    date: '2016.10.27',
    time: '1:00 AM',
    duration: '2 hours',
    location: {
        streetAddr:'404 Main St',
        city: 'Los Angeles',
        state: 'CA',
        zip: '87885',
        lon: 0,
        lat: 0
    },
    capacity: 300
    }];


// define our routes
dbRouter.route('/AddEventData')
    .get(function(req, res) {
        // get reference for MongoDb client
        // open a connection to Monogdb 
       var url = 'mongodb://localhost:27017/eventsApp';
        mongodb.connect(url, function(err, db){
            var collection = db.collection('events');
            collection.insertMany(eventsData, function(err, results){
                res.send(results);
                db.close();
            });
        });
    });

module.exports = dbRouter;