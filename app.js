const { error } = require('console');
const { application } = require('express');
const express = require('express');
const http = require('http');
const routers = require('./router.js');
const fs = require('fs');
const qs = require('qs');

const app = express();

app.set('port', process.env.PORT || 443);

app.set('view engine', 'pug');
app.set('views', './views');

app.set('query parser', (str) => {
    return qs.parse(str)
});

app.use((err, req, res, next) => {
    console.error(err);
    res.render('error');
});

app.use(express.static('public'));

var router = express.Router();
for (var i = 0; i < routers.length; i++) {
    if (routers[i].type === 'get' || routers[i].type == undefined){
        router.route(routers[i].route).get(routers[i].router);
    } else {
        router.route(routers[i].route).post(routers[i].router);
    }
}

app.use('/', router);

app.get((err, req, res, next) => {
	res.render('error');
});

app.listen(app.get('port'), () => {
    console.log(`Port ${app.get('port')} opened`);
});