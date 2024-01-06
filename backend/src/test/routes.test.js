const request = require("supertest");
const app = require("../main");

describe("Test the users root path", () => {
  test("It should response the GET method", async () => {
    const response = await request(app).get("/users");
    expect(response.statusCode).toBe(200);
  });
});