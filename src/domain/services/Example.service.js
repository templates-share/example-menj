const ExampleRepository = require("../../infra/repository/Example.repository");
const { isValidFields } = require("../validator/validField");

class ExampleService {
  async store({ payload }) {
    const validField = await isValidFields(payload, [
      "name",
      "email",
      "password",
    ]);

    if (validField.error) return validField;

    return await ExampleRepository.store({ payload });
  }
}

module.exports = new ExampleService();
