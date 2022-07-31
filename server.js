const path = require('path');
const express = require('express');
const server = { app: express(), port: 9000 };

server.app.use(express.urlencoded({ extended: false }));
server.app.use(express.json());
server.app.use(express.static('static'));
server.app.use(express.static('public'));

server.app.put('/test',(req,res) => {res.send(`success ${req.rawHeaders} + ${req.headers['user-agent']}`)});
server.app.get('/',(req,res) => {res.sendFile(path.join(__dirname+'/static/index.html'))});
server.app.listen(server.port,() => {console.warn(`application listening at: http://localhost:${server.port}`)}); 
              /*  ----- APIs ------  */
server.app.get('/api/v1/database',(req,res) => {    
  const database = [
    {
      id: '~',
      user: '~',
      passw: '~'
    },
    {
      id: '~',
      user: '~',
      passw: '~'
    },
    {
      id: '~',
      user: '~',
      passw: '~'
    }
  ];
  res.json(database);
});

