//Import dependencies
require('dotenv').config();
const mongoose = require('mongoose');

//Get DATABASE URI
const DATABASE_URL = process.env.DATABASE_URL;

//Connect to MongoDB
mongoose.connect(DATABASE_URL)

//Connection Events
mongoose.connection 
  .on("open", () => console.log("Connected to Mongo"))
  .on("close", () => console.log("Disconnected from Mongo"))
  .on("error", (error) => console.log(error));

// export the connection
module.exports = mongoose;