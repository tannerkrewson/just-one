const express = require("express");
const path = require("path");

const app = express();
const http = require("http").createServer(app);
const io = require("socket.io")(http);

const reactPath = path.resolve(__dirname, "..", "client", "dist");
app.use(express.static(reactPath));

app.get("*", (req, res) => {
  res.sendFile(path.join(reactPath, "index.html"));
});

io.on("connection", (socket) => {
  console.log("!!");
});

http.listen(process.env.PORT || 4001, () => {
  console.log("listening!");
});
