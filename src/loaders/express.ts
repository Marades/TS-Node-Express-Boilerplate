import express from "express";
import cors from 'cors';
import helmet from 'helmet'
import routes from "@/api";
import "reflect-metadata";

export default (app: express.Application) => {
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());

  app.enable('trust proxy')
  app.use(cors())
  app.use(helmet())

  app.use("/", routes());
};
