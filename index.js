const express = require("express");
const app = express();
const authRoute = require("./routes/authRoute");
const s3Route = require("./routes/s3Route");
const PORT = process.env.PORT || 4000;
require("dotenv").config({
  path: "./config.env",
});

app.use(express.json());
app.use("/cognito/", authRoute);
app.use("/s3/", s3Route);
app.listen(PORT, () => {
  console.log("server is running on port " + PORT);
});
