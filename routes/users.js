const express = require('express');
const router = express.Router();

router.use(logger);

router.get('/', (req, res) => {
    console.log(req.query.name);
    res.send('User List');
});

router.get('/new', (req, res) => {
    res.render('users/new');
});

const users = [{name: "Kamran"}, {name: "Zeeshan"}];

router.post('/', (req, res) => {
    const isValid = true;
    if(isValid) {
        users.push({ name: req.body.name });
        res.redirect(`/users/${users.length - 1}`);
    } else {
        console.log('Error!!!');
        res.render('users/new', { name: req.body.name });
    }
});

router.route('/:id')
.get((req, res) => {
    console.log(req.user);
    let id = req.params.id;
    res.send(`Get user with ${id}`);
})
.put((req, res) => {
    let id = req.params.id;
    res.send(`Put user with ${id}`);
})
.delete((req, res) => {
    let id = req.params.id;
    res.send(`Delete user with ${id}`);
});

router.param('id', (req, res, next, id) => {
    req.user = users[id];
    next();
});


function logger(req, res, next) {
    console.log(req.originalUrl);
    next();
}

module.exports = router;