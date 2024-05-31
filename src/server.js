require("dotenv").config();
const routes = require("./routes");
const express = require("express");

const app = express();

app.use(express.json());
app.use(routes);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`SERVER IN PORT: ${PORT}`);
});
