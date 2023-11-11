/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs');
const jsonServer = require('json-server');
const path = require('path');
// const jwt = require('jsonwebtoken');

const server = jsonServer.create();
const router = jsonServer.router(path.resolve(__dirname, 'db.json'));

server.use(jsonServer.defaults());
server.use(jsonServer.bodyParser);

// Imitate server delay
server.use(async (req, res, next) => {
  await new Promise((resolve) => {
    setTimeout(resolve, 800);
  });
  next();
});

// Login endpoint
server.post('/login', (req, res) => {
  try {
    const { username, password } = req.body;
    const db = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'db.json'), 'UTF-8'));
    const { users } = db;

    const userFromDB = users.find((user) => (user.username === username) && (user.password === password));
    if (!userFromDB) {
      return res.status(403).json({ message: 'USER NOT FOUND' });
    }

    const { id, username: user } = userFromDB;
    return res.json({ id, username: user });
  } catch (e) {
    console.log(e);
    return res.status(403).json({ message: e.message });
  }
});

// Auth check
server.use((req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(403).json({ message: 'AUTH ERROR' });
  }
  next();
});

server.use(router);

// Run server http://localhost:8000
server.listen(8000, () => {
  console.log('Server is running on port 8000');
});
