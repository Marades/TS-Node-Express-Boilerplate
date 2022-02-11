import { Joi } from "celebrate";

interface User {
  id?: number;
  name: string;
}

const insertSchema = Joi.object<User>({
  id: Joi.number(),
  name: Joi.string().required(),
});

export default {
  insertSchema,
};
