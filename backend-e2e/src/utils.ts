import request from "supertest";
export const API_BASE_URL = "http://localhost:3000";

// crear funcion para auto login

export async function getAuthToken() {
  const res = await request(API_BASE_URL).post("/auth/login").send({
    email: "marcosnuero11@gmail.com",
    password: "1234",
  });

  return res.body.accessToken;
}
