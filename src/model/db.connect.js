const mongoose = require("mongoose");
require("dotenv").config();

const database_connection = process.env.DATABASE_CONNECTION;

async function createConnection() {
  await mongoose.connect(database_connection);
}
createConnection()
  .then(() => {
    console.log("Database is connecting...");
  })
  .catch((err) => console.log(err));

module.exports={mongoose};
