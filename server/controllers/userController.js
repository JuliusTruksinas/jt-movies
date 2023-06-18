const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config.js");

const UserModel = require("../models/UserModel.js");

const createToken = (_id) => {
  return jwt.sign({ userId: _id }, JWT_SECRET, {
    expiresIn: "3d",
  });
};

const registerUser = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await UserModel.register(username, password);
    const token = createToken(user._id);
    res.status(200).json({ user: user.username, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const loginUser = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await UserModel.login(username, password);
    const token = createToken(user._id);
    res.status(200).json({ user: user.username, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  registerUser,
  loginUser,
};
