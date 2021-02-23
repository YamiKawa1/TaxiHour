
const morgan = require('morgan');
const exphbs = require('express-handlebars');
const path = require('path');
const flash = require('connect-flash');
const session = require('express-session');
const MySQLStore = require('express-mysql-session');
const passport = require('passport');
const SocketIO = require('socket.io');

//inicializations
const express = require('express');
const app = express();

const sequelize = require('./database/db.js');
require('dotenv').config()

require('./lib/passport')

// middlewares
// inicializando flash, para mostrar alertas
// app.use(session({
//     secret: 'Mycheesgame',
//     resave: false,
//     saveUninitialized: false,
//     store: new MySQLStore(sequelize)
// }));
// app.use(flash());

app.use(morgan('dev'));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// end middlewares

//routes
app.use(require('./routes/web'));
// app.use(require('./routes/api'));

//public
app.use(express.static(path.join(__dirname, 'public')))

// Server
var host = process.env.SERVE_HOST || 'localhost';
var port = process.env.SERVE_PORT || 3000;

const server = app.listen(port, function () {
    console.log(host + ':' + port);

    // load data base { force: true }
    sequelize.sync().then(() => {
        console.log("Conection db");
    }).catch(error => {
        console.log('Error db', error);
    })

    // render view
    app.set('views', path.join(__dirname, 'views'));
    app.engine('.hbs', exphbs({
        defaultLayout: 'main',
        layoutsDir: path.join(app.get('views'), 'layouts'),
        partialsDir: path.join(app.get('views'), 'partials'),
        extname: '.hbs',
        helpers: require('./lib/handdlebars')
    }));
    app.set('view engine', '.hbs');

});

//inicializar passport
app.use(passport.initialize());

// tabla para mantener al usuario activo, guardado en la db
app.use(passport.session());


//gloal variant
// app.use((req, res, next) => {
//     app.locals.success = req.flash('success');
//     app.locals.message = req.flash('message');
//      if (req.user != undefined) {
//          app.locals.user = req.user[0];
//      }

//     next();
// });


// websockets
var connections = [];
const io = SocketIO(server);

const getCounter = () => {
    io.sockets.emit('getCounter', connections.length)
}

io.on('connection', (socket) => {
    
    connections.push(socket);
    getCounter();
    console.log('new conection', socket.id, connections);
    
    socket.on('chatMessage', data => {
        io.sockets.emit('chatMessage', data);
    });

    socket.on('status', data => {
        io.sockets.emit('status', data);
    });

    socket.on('move', data => {
        io.sockets.emit('move', data);
    });
});