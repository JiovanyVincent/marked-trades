const { client } = require('../../config/db');
const database = process.env.DATABASE;

const getAllUsers = async () => {
  try {
    const users = client.db(database).collection('users');
    const result = await users.find().toArray();
    return result;
  } catch (error) {
    throw new Error("Erreur lors de la récupération de l'utilisateur:", error);
  }
}

module.exports = { getAllUsers };