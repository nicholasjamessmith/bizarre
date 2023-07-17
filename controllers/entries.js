const express = require("express");
const Entry = require("../models/entries");

//Routing middleware that allows the routes defined on this file to be used on our server.js file
const router = express.Router()

//Controllers
router.get("/", async (req, res) => {
  const allEntries = await Entry.find({});
  res.render("index.ejs", { entries: allEntries })
})

//New
router.get("/new", (req, res) => {
  res.render("new.ejs")
})

//Create
router.post("/entries", (req, res) => {
  //fit data into odel before 'create'ing
  Entry.create(req.body)
  res.redirect("/entries")
})

module.exports = router;