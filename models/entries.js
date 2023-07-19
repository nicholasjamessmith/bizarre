const mongoose = require('./connection')

const entrySchema = new mongoose.Schema({
  //image: { type: String, required: true },
  title: { type: String, required: true },
  body: { type: String, required: true },
  author: { type: String, required: true }
});

const Entry = mongoose.model(`entry`, entrySchema);

module.exports = Entry;