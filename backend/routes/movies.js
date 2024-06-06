const express = require("express");
const router = express.Router();
const Movie = require("../models/Movie");

router.get("/", async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1; // Default page is 1
    const pageSize = parseInt(req.query.pageSize) || 40; // Default page size is 40
    const skip = (page - 1) * pageSize;

    const totalMovies = await Movie.countDocuments();
    const movies = await Movie.find().skip(skip).limit(pageSize);

    res.json({
      movies,
      total: totalMovies,
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

router.get("/:id", async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id);
    if (!movie) {
      return res.status(404).json({ msg: "Movie not found" });
    }
    res.json(movie);
  } catch (err) {
    console.error(err.message);
    if (err.kind === "ObjectId") {
      return res.status(404).json({ msg: "Movie not found" });
    }
    res.status(500).send("Server Error");
  }
});

module.exports = router;
