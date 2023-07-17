//Import our dependencies
require("dotenv").config() //bring in .env variables
const express = require("express"); //web framework for node
const EntriesRouter = require("./controllers/entries");
const morgan = require("morgan"); //logger for node
const methodOverride = require("method-override");
//const Entry = require('./models/entries')
//Express application
const app = express();

//Middleware
app.use(morgan("tiny")); //logging
app.use(methodOverride("_method")); //override with POST having ?_method=DELETE or ?_method=PUT
app.use(express.static("public")) // serve static files from public folder

app.use("/entries", EntriesRouter)

//Routes
app.get("/", (req, res) => {
  res.send("Simple Journal")
})

//Listen
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => { console.log(`Listening on port ${PORT}`) })