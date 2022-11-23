const express = require('express');
const userRouter = require('./routes/users');

const app = express();

app.use(express.static('public'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set('view engine', 'ejs');

// app.get('/', function(req, res) {
//     res.render('index', { text232: "world" });
// });

app.use('/users', userRouter);

app.listen(3000);