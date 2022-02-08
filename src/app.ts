const express = require("express");
const config = require("./config");

function runServer() {
  const app = express();

  app.listen(config.port);
}

runServer();
