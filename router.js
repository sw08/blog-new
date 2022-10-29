const fs = require('fs');
const path = require('path');
const MarkdownIt = require('markdown-it');
const plainText = require('markdown-it-plain-text');
const tool = require('./tool.js')

const md = new MarkdownIt();
md.use(plainText);


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
                    res.render('post', {post: md.render(post), backAndForth: backAndForth});
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
                var page = Number(req.query.page || 1);
                page = page * 20 > data.length ? 1 : page;
                var posts = [];
                data = data.filter(post => post.toLowerCase().includes(req.query.keyword.toLowerCase()));
                data.sort((a, b) => {return Number(b.slice(0, 10)) - Number(a.slice(0, 10))});
                for (var i = 20 * (page - 1); i < Math.min(20 * page, data.length); i++) {
                    var content = fs.readFileSync(`./posts/${data[i]}`, 'utf8');
                    var date = data[i].slice(0, 10);
                    md.render(content);
                    content = md.plainText.replace('\n', ' ');
                    posts.push({
                        date: tool.dateFormat(date),
                        title: data[i],
                        preview: content.length >= 385 ? content.slice(0, 385) + '...' : content
                    });
                };
                res.render('search', {posts: posts, query: req.params.keyword});
            });
        }
    },
    {
        route: '*',
        router: (req, res) => {
            res.render('404');
        }
    }
];