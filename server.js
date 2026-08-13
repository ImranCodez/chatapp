require("dotenv").config();

const express = require("express");
const route = require("./routes");
const cors = require("cors");
const dbcongfig = require("./dbconfig");
const cookieParser = require('cookie-parser')
const app = express();
dbcongfig();
app.use(cookieParser())
app.use(cors());
app.use(express.json());
app.use(route);
const dns = require("node:dns/promises");
dns.setServers(["1.1.1.1", "8.8.8.8"]);
app.listen(8000, () => {
  console.log("Server is running");
});
