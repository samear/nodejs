//https://www.youtube.com/watch?v=pKd0Rpw7O48
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/api/courses', (req, res) => {
    res.send([1,2,3]);
})

//http://localhost:3000/api/courses/1
app.get('/api/courses/:id', (req, res) =>  {
    res.send(req.params.id); 
});

//http://localhost:3000/api/posts/2018/1?sortBy=name
app.get('/api/posts/:year/:month', (req, res) =>  {
    res.send(req.query); 
});

const port = process.env.PORT || 3000
app.listen(3000, () => console.log('Listening on port 3000...'));