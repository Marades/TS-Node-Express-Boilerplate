import ExampleService from "@/services/example";
import { Router, Request, Response, NextFunction } from "express";
import Container from "typedi";

const router = Router();

export default (app: Router) => {
  app.use("/examples", router);

  router.get("/", async (req: Request, res: Response, next: NextFunction) => {
    const { seq } = req.query;
    try {
      const exampleService = Container.get(ExampleService);
      const result = await exampleService.get(seq);

      return res.json({ result }).status(200);
    } catch (e) {
      return next(e);
    }
  });
};
