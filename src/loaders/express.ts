import express from "express";
import routes from "@/api";
import "reflect-metadata";

export default (app: express.Application) => {
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());

  app.use("/", routes());
};
