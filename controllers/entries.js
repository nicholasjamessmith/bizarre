const express = require("express");
const Entry = require("../models/entries");

//Routing middleware that allows the routes defined on this file to be used on our server.js file
const router = express.Router()

//Controllers - INDUCES (Index, New, Destroy, Update, Create, Edit, Show)

//Index
router.get("/", async (req, res) => {
  const allEntries = await Entry.find({});
  res.render("index.ejs", { entries: allEntries })
})

//New
router.get("/new", (req, res) => {
  res.render("new.ejs")
})

//Create
router.post("/", async (req, res) => {
  //fit data into model before 'create'ing
  await Entry.create(req.body)
  res.redirect("/entries")
})

//Show
router.get("/:id", async (req, res) => {
  const id = req.params.id;
  const entry = await Entry.findById(id)
  res.render("show.ejs", { entry: entry })
})

//Delete
router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  await Entry.findByIdAndDelete(id);
  res.redirect("/entries")
})

//Edit
router.get("/:id/edit", async (req, res) => {
  const id = req.params.id;
  const entry = await Entry.findById(id);
  res.render("edit.ejs", { entry })
})

//Update
router.put("/:id", async (req, res) => {
  const id = req.params.id;
  await Entry.findByIdAndUpdate(id, req.body);
  res.redirect("/entries")
})
module.exports = router;