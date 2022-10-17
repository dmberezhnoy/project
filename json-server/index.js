const fs = require('fs');
const jsonServer = require('json-server');
const cors = require('cors');
const path = require('path');

const server = jsonServer.create();
const router = jsonServer.router(path.resolve(__dirname, 'db.json'));

const corsOptions = {
  origin: '*',
};

server.use(cors(corsOptions));
server.use(jsonServer.defaults({}));
server.use(jsonServer.bodyParser);

// Задержка для имитации реального апи
server.use(async (req, res, next) => {
  await new Promise((res) => {
    setTimeout(res, 1000);
  });
  next();
});

server.post('/login', (req, res) => {
  const { username, password } = req.body;
  const db = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'db.json'), 'UTF-8'));
  const { users } = db;

  const userFromBd = users.find((user) => user.username === username && user.password === password);

  if (userFromBd) {
    return res.json(userFromBd);
  }

  return res.status(403).json({ message: 'Auth failed ' });
});

// eslint-disable-next-line consistent-return
server.use((req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(403).json({ message: 'Auth failed ' });
  }
  next();
});

server.use(router);

server.listen(8000, () => {
  console.log('Server is running. PORT: 8000');
});
