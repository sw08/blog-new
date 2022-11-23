const fs = require('fs');
const path = require('path');
const MarkdownIt = require('markdown-it');
const plainText = require('markdown-it-plain-text');
const tool = require('./tool.js')

const md = new MarkdownIt();
md.use(plainText);

const db = new tool.DB();


module.exports = [
    {
        route: '/post/:id',
        router: (req, res) => {
            fs.readdir('./posts/', 'utf8', (err, files) => {
                fs.readFile(`./posts/${req.params.id}.md`, 'utf8', (err, post) => {
                    if (err) {
                        res.render('404');
                        return;
                    }
                    files.sort((a, b) => {return Number(b.slice(0, 10)) - Number(a.slice(0, 10))});
                    var index = files.indexOf(`${req.params.id}.md`)
                    var backAndForth = [];
                    if (2 <= index && index <= files.length - 3) {
                        backAndForth = files.slice(index - 2, index + 2);
                    } else if (index < 2) {
                        backAndForth = files.slice(0, 5);
                    } else {
                        backAndForth = files.slice(-5);
                    }
                    res.render('post', {post: md.render(post), backAndForth: backAndForth, path: req.params.id});
                });
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
                const posts = db.getPosts(req.query.keyword, Number(req.query.page || 1));
                res.render('search', {posts: posts, query: req.params.keyword});
            });
        }
    },
    {
        route: '/',
        router: (req, res) => {
            const posts = db.getPosts(keyword='', page=1, per=4);
            res.render('main', {posts: posts});
        }
    },
    {
        route: '*',
        router: (req, res) => {
            res.render('404');
        }
    }
];