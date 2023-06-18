const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const { MONGO_URI, PORT } = require("./config.js");

// Routers
const authRouter = require("./routes/authRoutes.js");
const movieRouter = require("./routes/movieRoutes.js");
app.use(cors());
app.use(express.json());
app.use("/auth", authRouter);
app.use("/movies", movieRouter);
mongoose.connect(MONGO_URI);

mongoose.connection.on("open", function () {
  app.listen(process.env.PORT || PORT, () =>
    console.log("The server is running")
  );
});
