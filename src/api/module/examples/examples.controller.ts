import { Request, Response, NextFunction } from "express";
import { Container } from "typedi";
import ExampleService from "./examples.service";

export default {
  async get(req: Request, res: Response, next: NextFunction) {
    const { seq } = req.query;
    try {
      const exampleService = Container.get(ExampleService);

      const result = await exampleService.get(seq);

      return res.json({ result }).status(200);
    } catch (e) {
      return next(e);
    }
  },
  async addUser(req: Request, res: Response, next: NextFunction) {
    const { name } = req.body;
    try {
      const exampleService = Container.get(ExampleService);

      const result = await exampleService.addUser(name);

      return res.json({ result }).status(200);
    } catch (e) {
      return next(e);
    }
  },
};
