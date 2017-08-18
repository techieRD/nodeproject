var express = require('express');

var eventRouter = express.Router();

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

eventRouter.route('/:id')
    .get(function(req, res){
        var id = req.params.id
        res.render('event', { 
        list: ['first event', '2nd event', '3rd event'],
        nav: [{ Link: 'Services', Text : 'Services'},
              {Link: 'Portfolio', Text : 'Portfolio'},
              {Link: 'About', Text : 'About'},
              {Link: 'Team', Text : 'Team'},
              {Link: 'Contact', Text : 'Contact'},
              {Link: 'Events', Text : 'Events'}
        ],
        events : eventsData[id]
    });
});
    
module.exports = eventRouter;