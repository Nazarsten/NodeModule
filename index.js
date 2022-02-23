const express = require('express')
const hbs = require('express-handlebars');
const path = require('path')

const app = express();

app.use(express.json());
app.use(express.urlencoded());


app.use(express.static(path.join(__dirname, 'static')));
app.set('view engine', '.hbs');
app.engine('.hbs', hbs.engine({defaultLayout: false}))
app.set('views', path.join(__dirname, 'static'));


app.get('/login', (req, res) => {
    res.render('login')
})

const usersArr = [];

app.post('/login', ({body}, res) => {
    const existEmail = usersArr.some(user => user.email === body.email)
    if (existEmail) {
        res.redirect('/err')
        return;
    }
    usersArr.push({...body, id: (new Date()).getTime()})
    res.redirect('users')
})

app.get('/users', (req, res) => {
    res.render('users', {usersArr});

})

app.get('/err', (req, res) => {
    res.render('err')
})

app.get('/users/:userId', (req, res) => {
    const { userId } = req.params;
    const user = usersArr[userId];
    res.render('user', {user})
})

app.get('/user/:location', (req, res) => {
    const { location } = req.params;
    const resultTrue = usersArr.filter(user => user.city === location);
    if (resultTrue.length <= 0) {
        res.render('err')
    } else {
        res.render('cityFilteredUsers', { resultTrue })
    }
})

app.get('/user&age=:age', (req, res) => {
    const { age } = req.params;
    const result = usersArr.filter(user => user.age === age);
    if (result.length !== 0) {
        res.render('ageFilteredUsers', { result })
    } else {
        res.render('err');
    }
})

app.listen(5200, () => {
    console.log('Server has started')
})