const mongoose = require('mongoose');

const credentials = {
  username: process.env.USERNAME,
  dbPassword: process.env.DB_PASSWORD,
  cluster: process.env.CLUSTER,
  db: process.env.DATABASE
};

const uri = `mongodb+srv://${credentials.username}:${credentials.dbPassword}@${credentials.cluster}.g1fjuwb.mongodb.net/${credentials.db}?retryWrites=true&w=majority`;

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connecté à la base de données via Mongoose');
  })
  .catch((error) => {
    console.error('Erreur de connexion :', error);
  });

module.exports = { mongoose };