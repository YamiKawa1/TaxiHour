const path = require('path')
const exphbs = require('express-handlebars')
const SocketIO = require('socket.io')

const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes
app.use(require('./routes/web'))
// app.use(require('./src/routes/api'))

// public
app.use(express.static(path.join(__dirname, 'public')))
console.log(path.join(__dirname));
// render views
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs',

}));
app.set('view engine', '.hbs');


//server
var host = process.env.SERVE_HOST || 'localhost';
var port = process.env.SERVE_PORT || 3000;

const server = app.listen(port, () => {
    console.log(host + ':' + port);
})

const io = SocketIO(server);

io.on('connection', (socket) => {

    socket.on('reserve', data => {
        io.socket.emit('reserve', data)
    })
});




