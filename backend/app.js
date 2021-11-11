
const express = require('express');
const exp = require('constants');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use((req,res,next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Header", "Origin, X-Requested-With, Content-Type, Accept");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, DELETE, PUT, PATCH, OPTIONS");
  next();
});

app.post("/api/posts", (req,res,next) => {
  const post = req.body;
  console.log(post);
  res.status(201).json({
    message: "post added successfully",
    posts: posts
  });
})

app.get('/api/posts',(req,res,next) => {
  const posts = [
    {id: '123', title: 'First Post', content: 'This is my first server side post'},
    {id: '1234', title: 'Second Post', content: 'This is my Second server side post'},
    {id: '1235', title: 'Third Post', content: 'This is my third server side post'},
    {id: '1236', title: 'Fourth Post', content: 'This is my fourth server side post'}
  ];

  res.status(200).json({
    message: 'sent successfully',
    posts: posts
  });
});

module.exports = app;
