require('dotenv').config();
const express = require('express');
const app = express();
const port = 3000;

const authentication = require('./routes/authentication');
const users = require('./routes/users');

app.use('/authentication', authentication);
app.use('/users', users);

app.listen(port, () => {
  console.log(`server is running on port: ${port}`);
});