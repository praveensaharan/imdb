const mongoose = require("mongoose");

const MovieSchema = new mongoose.Schema({
  image_src: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  wiki_page: {
    type: String,
    required: true,
  },
  summary: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Movie", MovieSchema);
