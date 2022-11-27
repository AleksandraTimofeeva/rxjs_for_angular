const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('server/db.json');
const middlewares = jsonServer.defaults();
const db = require('./db.json');
const fs = require('fs');

server.use(middlewares);
server.use(jsonServer.bodyParser);

server.get('/api/users', (req: any, res: any) => {
  const users = readUsers();
  res.status(200).send(users);
});

server.post('/api/user/save', (req: any, res: any) => {
  const users = readUsers();
  const user = users.filter((u: any) => u.name === req.body.name)[0];

  if (user === undefined || user === null) {
    db.users.push(req.body);
  } else {
    res.status(500).send('User already exists');
  }
});

server.post('/api/user/delete', (req: any, res: any) => {
  const users = readUsers();
  const user = users.filter((u: any) => u.name === req.body.name)[0];

  if (user === undefined || user === null) {
    db.users.push(req.body);
  } else {
    res.status(500).send('User already exists');
  }
});

server.use('/users', (req: any, res: any, next: any) => {
  next();
});

server.use(router);
server.listen(3001, () => {
  console.log('JSON Server is running');
});

function readUsers() {
  const dbRaw = fs.readFileSync('./server/db.json');
  const users = JSON.parse(dbRaw).users
  return users;
}
