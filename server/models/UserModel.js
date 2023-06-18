const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const UserSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  likedMovies: {
    type: [String],
    default: [],
  },
});

UserSchema.statics.register = async function (username, password) {
  const foundUser = await this.findOne({ username });
  if (foundUser) throw Error("Username already in use");
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  const newUser = this.create({ username, password: hashedPassword });
  return newUser;
};

UserSchema.statics.login = async function (username, password) {
  const foundUser = await this.findOne({ username });
  if (!foundUser) throw Error("This user does not exist");
  const match = await bcrypt.compare(password, foundUser.password);
  if (!match) throw Error("The password is incorrect");
  return foundUser;
};

UserSchema.statics.likeMovie = async function (userId, movieId) {
  const user = await this.findOne({ _id: userId });
  if (user) {
    user.likedMovies.push(movieId);
    const modifiedDoc = await user.save();
    return modifiedDoc;
  }
};

UserSchema.statics.dislikeMovie = async function (userId, movieId) {
  const user = await this.findOne({ _id: userId });
  if (user) {
    user.likedMovies.pull(movieId);
    const modifiedDoc = await user.save();
    return modifiedDoc;
  }
};

module.exports = mongoose.model("User", UserSchema);
