const fs = require('fs');
const path = require('path');

module.exports = [
    {
        route: '/posts/:id',
        router: (req, res) => {
            fs.readFile(`./posts/${req.params.id}.md`, 'utf8', (err, data) => {
                res.render('post', {post: data});
            });
        }
    },
    {
        route: '/search',
        router: (req, res) => {
            fs.readdir('./posts/', 'utf8', (err, data) => {
                if (req.query.keyword === undefined || req.query.keyword === '') {
                    res.redirect('/');
                    return;
                }
                var page = Number(req.query.page || 1);
                page = page * 20 > data.length ? 1 : page;
                var posts = [];
                data = data.filter(post => post.includes(req.query.keyword));
                data.sort((a, b) => {return Number(b.slice(0, 10)) - Number(a.slice(0, 10))});
                for (var i = 20 * (page - 1); i < Math.min(20 * page, data.length); i++) {
                    const content = fs.readFileSync(`./posts/${data[i]}`, 'utf8');
                    var date = data[i].slice(0, 10);
                    posts.push({date: `20${date.slice(0, 2)}/${date.slice(2, 4)}/${date.slice(4, 6)} ${date.slice(6, 8)}:${date.slice(8, 10)}`, title: data[i], preview: content.slice(0, content.length >= 305 ? 305 : content.length) + '...'});
                };
                res.render('search', {posts: posts, query: req.params.keyword});
            });
        }
    },
];