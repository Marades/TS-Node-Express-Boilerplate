import * as moduleAlias from "module-alias";
moduleAlias.addAlias("@", __dirname);
import express from "express";
import config from "./config";
import loader from "./loaders";

async function runServer() {
  const app = express();

  await loader({ app });

  app.listen(config.port);
  console.log(`${config.port} server start`);
}

runServer();
