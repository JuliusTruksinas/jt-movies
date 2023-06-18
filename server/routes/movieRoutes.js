const express = require("express");
const router = express.Router();

const {
  getLikedMovies,
  likeMovie,
  dislikeMovie,
} = require("../controllers/movieController");

const requireAuth = require("../middleware/requireAuth.js");

router.use(requireAuth);

router.get("/", getLikedMovies); // gets all his movies

router.post("/", likeMovie); //adds a new movie

router.delete("/", dislikeMovie); //removes a liked movie

module.exports = router;
