const fs = require('fs');
const MarkdownIt = require('markdown-it');
const plainText = require('markdown-it-plain-text');

const md = new MarkdownIt();
md.use(plainText);


class DB {
    constructor () {
        this.return = undefined;
    }
    getPosts(keyword='', page=1) {
        var data = fs.readdirSync('./posts/', 'utf8')    
        page = page * 20 > data.length ? 1 : page;
        var posts = [];
        data = keyword !== '' ? data.filter(post => post.toLowerCase().includes(keyword.toLowerCase())) : data;
        data.sort((a, b) => {return Number(b.slice(0, 10)) - Number(a.slice(0, 10))});
        for (var i = 20 * (page - 1); i < Math.min(20 * page, data.length); i++) {
            var content = fs.readFileSync(`./posts/${data[i]}`, 'utf8');
            var date = data[i].slice(0, 10);
            md.render(content);
            content = md.plainText.replace('\n', ' ');
            posts.push({
                date: module.exports.dateFormat(date),
                title: data[i],
                preview: content.length >= 385 ? content.slice(0, 385) + '...' : content
            });
        };
        return posts;
    }
}

module.exports = {
    dateFormat: (date) => {
        return `20${date.slice(0, 2)}/${date.slice(2, 4)}/${date.slice(4, 6)} ${date.slice(6, 8)}:${date.slice(8, 10)}`
    },
    DB: DB
}

