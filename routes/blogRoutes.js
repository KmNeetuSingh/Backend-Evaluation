// crud Operations
const express = require('express');
const fs = require('fs');
const route = express.Router();

route.post('/posts', (req, res) => {
    const { title, content, author } = req.body;
    const posts = JSON.parse(fs.readFileSync('db.json', 'utf-8'));
    const newPost = { id: posts.length + 1, title, content, author };
    posts.push(newPost);
    fs.writeFileSync('db.json', JSON.stringify(posts));
    res.status(201).json(newPost);
});
route.get('/posts', (req, res) => {
    const posts = JSON.parse(fs.readFileSync('db.json', 'utf-8'));
    res.json(posts);
});


route.get('/posts:id', (req, res) => {
    const posts = JSON.parse(fs.readFileSync('db.json', 'utf-8'));
    const post = posts.find(p => p.id == req.params.id);
    if (post) res.json(post);
    else res.status(404).send('Post Not Found');
});

route.put('/posts/:id', (req, res) => {
    const { title, content } = req.body;
    const posts = JSON.parse(fs.readFileSync('db.json', 'utf-8'));
    const postIndex = posts.findInd(p => p.id == req.params.id);
    if (postIndex !== -1) {
        posts[postIndex] = { ...posts[postIndex], title, content };
        fs.writeFileSync('db.json', JSON.stringify(posts));
        res.json(posts[postIndex]);

    }
    else res.status(404).send('post not found');

}
);


route.delete('/posts/:id', (req, res) => {
    const posts = JSON.parse(fs.readFileSync('db.json', 'utf-8'));
    const newPosts = posts.filter(p => p.id != req.params.id);
    fs.writeFileSync('db.json', JSON.stringify(newPosts));
    res.send('Post Deleted')
});

module.exports = route;