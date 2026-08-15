require("dotenv").config();

const express = require("express");
const route = require("./routes");
const cors = require("cors");
const dbcongfig = require("./dbconfig");
const cookieParser = require('cookie-parser')
const app = express();
const {createServer} = require('http');
const httpServer = createServer(app);
const io = require('socket.io')(httpServer);
global.io=io
dbcongfig();
app.use(cookieParser())
io.on("connection", (socket) => {
  socket.on("join_room"),(convoId)=>{
    socket.join(convoId)
  };
});
app.use(cors());
app.use(express.json());
app.use(route);
const dns = require("node:dns/promises");
dns.setServers(["1.1.1.1", "8.8.8.8"]);
httpServer.listen(8000, () => {
  console.log("Server is running");
});
