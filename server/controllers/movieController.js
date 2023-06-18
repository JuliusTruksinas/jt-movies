const UserModel = require("../models/UserModel.js");

const getLikedMovies = async (req, res) => {
  const user = await UserModel.findOne({ _id: req.userId });
  res.status(200).json(user.likedMovies);
};
const likeMovie = async (req, res) => {
  const { movieId } = req.body;
  const modifiedDoc = await UserModel.likeMovie(req.userId, String(movieId));
  res.status(200).json({ likedMovies: modifiedDoc.likedMovies });
};
const dislikeMovie = async (req, res) => {
  const { movieId } = req.body;
  const modifiedDoc = await UserModel.dislikeMovie(req.userId, String(movieId));
  res.status(200).json({ likedMovies: modifiedDoc.likedMovies });
};

module.exports = {
  getLikedMovies,
  likeMovie,
  dislikeMovie,
};
