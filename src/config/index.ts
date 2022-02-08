const { env } = require("process");
const dotenv = require("dotenv");

env.NODE_ENV = env.NODE_ENV || "development";

const envResult = dotenv.config({ path: `./.env.${env.NODE_ENV}` });

console.log("parsed : ", envResult.parsed);
if (envResult.error) {
  throw new Error(`There i
	s not .env.${env.NODE_ENV} file`);
}

export = {
  port: +env.PORT,
};
