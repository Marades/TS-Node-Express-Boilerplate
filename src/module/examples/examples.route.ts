import { Router, Request, Response, NextFunction } from "express";
import ExampleController from "./examples.controller";
import ExampleService from "./examples.service";

import Container from "typedi";

const router = Router();

export default (app: Router) => {
  app.use("/examples", router);

  router.get("/", ExampleController.get);
};
