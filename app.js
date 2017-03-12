/**
 * Created by bigboy1122 on 3/10/17.
 */

var express = require('express');

var app = express();

var port = process.env.PORT || 5000;
var bookRouter = express.Router();

app.use(express.static('public'));
app.set('views','src/views');

app.set('view engine','ejs');

var books = [
    {
        title: 'Book 1',
        genre: 'Sci Fi',
        author: 'TGALATI',
        read: false
    },
    {
        title: 'Book 2',
        genre: 'Sci Fi',
        author: 'TGALATI',
        read: false
    },
    {
        title: 'Book 3',
        genre: 'Sci Fi',
        author: 'TGALATI',
        read: false
    },
    {
        title: 'Book 4',
        genre: 'Sci Fi',
        author: 'TGALATI',
        read: false
    },
    {
        title: 'Book 5',
        genre: 'Sci Fi',
        author: 'TGALATI',
        read: false
    }
];



bookRouter.route('/')
    .get(function(req,res){
        res.render('books',{title:'Hello from render',nav:[{Link:'/Books', Text: 'Books'},{Link: '/Authors', Text: 'Authors'}],
            books:books});
    });

bookRouter.route('/single')
    .get(function(req,res){
        res.send('Hello Single Books');
    });

app.use('/Books', bookRouter);

app.get('/', function (req, res) {
    res.render('index',{title:'Hello from render',nav:[{Link:'/Books', Text: 'Books'},{Link: '/Authors', Text: 'Authors'}]});
});
app.get('/books', function (req, res) {
    res.send('Hello Books');
});

app.listen(port, function (err) {
    console.log('running on ' + port + ' port');
});