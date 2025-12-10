import request from "supertest";
import { API_BASE_URL } from "../utils";

describe("Authentication", () => {
  it("should login and get accessToken", async () => {
    const loginUser = {
      email: "marcosnuero11@gmail.com",
      password: "1234",
    };
    const res = await request(API_BASE_URL).post("/auth/login").send(loginUser);
    expect(res.statusCode).toBe(200);
  });
});
