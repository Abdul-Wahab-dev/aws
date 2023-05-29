const express = require("express");
const app = express();
const authRoute = require("./routes/authRoute");
const PORT = process.env.PORT || 4000;
require("dotenv").config({
  path: "./config.env",
});

app.use(express.json());
app.use(authRoute);
app.listen(PORT, () => {
  console.log("server is running on port " + PORT);
});
