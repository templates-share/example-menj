const Example = require("../../model/Example");

class ExampleService {
  async store({ payload }) {
    return await Example.create(payload);
  }
}

module.exports = new ExampleService();
