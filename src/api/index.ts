import { Router } from "express";
import example from "./module/examples/examples.route";

export default () => {
  const app = Router();
  example(app);

  return app;
};
