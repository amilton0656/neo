const path = require('path');
const express = require('express')
// var cors = require('cors')
const app = express()

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())

// app.use(cors())

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

// app.set('view engine', 'ejs');
// app.set('views', 'views');


// const sequelize = require('./util/postgres.js')
// require('./models')
// sequelize.sync()

// app.use(express.static(path.join(__dirname, 'public')));

// const rotasPostagem = require('./routes/ro_postagem')
// app.use('/postagem', rotasPostagem)

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/status.html')
})

app.listen(21276)