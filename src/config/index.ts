import { env } from "process";
import dotenv from "dotenv";
// const { env } = require("process");
// const dotenv = require("dotenv");

env.NODE_ENV = env.NODE_ENV || "development";

const envResult = dotenv.config({ path: `./.env.${env.NODE_ENV}` });

if (envResult.error) {
  throw new Error(`There is not .env.${env.NODE_ENV} file`);
}

export default {
  port: +env.PORT,
  isProduction: env.NODE_ENV === 'production' ? true : false
};
