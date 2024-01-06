const { MongoClient, ServerApiVersion } = require('mongodb');

const credentials = {
  username: process.env.USERNAME,
  dbPassword: process.env.DB_PASSWORD,
  cluster: process.env.CLUSTER,
};

const uri = `mongodb+srv://${credentials.username}:${credentials.dbPassword}@${credentials.cluster}.g1fjuwb.mongodb.net/?retryWrites=true&w=majority`;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

module.exports = { client };