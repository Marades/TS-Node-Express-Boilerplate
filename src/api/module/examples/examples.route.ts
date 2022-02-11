import { Router, Request, Response, NextFunction } from "express";
import ExampleController from "./examples.controller";
import middleware from "@/api/middleware";
import { celebrate } from "celebrate";
const router = Router();

export default (app: Router) => {
  app.use("/examples", router);

  router.get("/", ExampleController.get);
  router.post(
    "/user",
    // celebrate({
    //   body: middleware.validate.user.insertSchema,
    // }),
    ExampleController.addUser
  );
};
