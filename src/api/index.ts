import { Router, Request, Response } from "express";
import example from "./routes/example";

export default () => {
  const app = Router();
  example(app);

  return app;
};
