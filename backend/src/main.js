// modules
require('dotenv').config();
const express = require('express');
const app = express();
// routes
const authentication = require('./routes/authenticationRoutes');
const users = require('./routes/usersRoutes');

app.use('/authentication', authentication);
app.use('/users', users);

module.exports = app;