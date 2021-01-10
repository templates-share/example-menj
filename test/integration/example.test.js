const request = require("supertest");
const app = require("../../src/main/app");
const UserSchema = require("../../src/model/Example");
const conn = require("../../src/infra/database/index");

beforeAll(async () => {
  await conn.connect();
});

afterAll(async () => {
  await conn.close();
});

describe("POST /api/v1/example", () => {
  beforeAll(async () => {
    endpoint = "/example";
    let user = new UserSchema({
      name: "Thiago",
      email: "thiagocarvalho.ads@gmail.com",
      password: "123",
    });
    await user.save();
  });

  it("should return 201 when user is successfully created", async () => {
    const response = await request(app).post(endpoint).send({
      name: "Thiago",
      email: "thiagocarvalho.ads@gmail.com",
      password: "123",
    });
    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty("_id");
    expect(response.body.name).toBeTruthy();
    expect(response.body.email).toBeTruthy();
    expect(response.body.password).toBeTruthy();
  });

  it("should return 400 if missing some field", async () => {
    const response = await request(app).post(endpoint).send({
      name: "name",
      email: "",
      password: "",
    });
    expect(response.status).toBe(400);
    expect(response.body).toMatchObject({
      statusCode: 400,
      message: "missing data: email,password",
    });
  });
});
