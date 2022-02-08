import express from "express";
import config from "./config";

function runServer() {
  const app = express();
  app.listen(config.port);
}

runServer();
