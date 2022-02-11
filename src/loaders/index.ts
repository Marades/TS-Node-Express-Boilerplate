import expressLoader from "./express";
import moduleAlias from "module-alias";

export default async ({ app }) => {
  moduleAlias.addAlias("@", __dirname);
  await expressLoader(app);
};
