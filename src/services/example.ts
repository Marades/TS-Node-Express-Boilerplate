import { Service } from "typedi";

@Service()
export default class ExampleService {
  constructor() {}

  public async get(seq) {
    return {
      Example: `example ${seq}`,
    };
  }
}
