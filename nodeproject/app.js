var express = require('express');
var app = express();

var port = process.env.PORT;
var eventRouter = express.Router();

app.use(express.static('public'));
app.use(express.static('bower_components'));

app.set('views', './src/views');
app.set('view engine', 'ejs');

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
    description: 'The first event',
    date: '2016.01.01',
    time: '1:00 PM',
    duration: '1 hour',
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
    name: 'Event 3',
    description: 'The third event',
    date: '2016.07.013',
    time: '5:00 PM',
    duration: '2 hours',
    location: {
        streetAddr:'101 Main St',
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

eventRouter.route('/')
    .get(function(req, res){
        res.render('events', { 
        list: ['first event', '2nd event', '3rd event'],
        nav: [{ Link: 'Services', Text : 'Services'},
              {Link: 'Portfolio', Text : 'Portfolio'},
              {Link: 'About', Text : 'About'},
              {Link: 'Team', Text : 'Team'},
              {Link: 'Contact', Text : 'Contact'},
              {Link: 'Events', Text : 'Events'}
        ],
        events : eventsData
    });
});

eventRouter.route('/event')
    .get(function(req, res){
        res.send('Hello Single Event!');
        
    })
app.use('/Events', eventRouter)



app.get('/', function(req, res){
    // res.send('Aloha World');
    res.render('index', { 
        list: ['first val', '2nd val', '3rd val'],
        nav: [{ Link: 'Services', Text : 'Services'},
              {Link: 'Portfolio', Text : 'Portfolio'},
              {Link: 'About', Text : 'About'},
              {Link: 'Team', Text : 'Team'},
              {Link: 'Contact', Text : 'Contact'},
              {Link: 'Events', Text : 'Events'}
        ],
    });
        
});

app.get('/routing', function(req, res){
    res.send('Aloha Routing');
});

app.listen(port, function(err){
    console.log('The server is running on port: ' + port);
});