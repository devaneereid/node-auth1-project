const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const userRouter = require('../users/users-router.js');
const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use('/api/users', userRouter);

server.get('/', (req, res) => {
    res.json({ api: 'API is up and running' });
});

module.exports = server;