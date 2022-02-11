import express from "express";
import routes from "@/api";

export default (app: express.Application) => {
  app.use("/", routes());
};
