const mongoose = require('./connection')

const entrySchema = new mongoose.Schema({
  image: { type: String, required: false },
  title: { type: String, required: false },
  body: { type: String, required: false },
  author: { type: String, required: false }
});

const Entry = mongoose.model(`entry`, entrySchema);

module.exports = Entry;