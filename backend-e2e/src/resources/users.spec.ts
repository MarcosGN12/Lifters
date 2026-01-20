import request from "supertest";
import { API_BASE_URL, getAuthToken } from "../utils";

describe("users", () => {
  let token: string;

  beforeAll(async () => {
    token = await getAuthToken();
  });

  describe("POST", () => {
    // CORRECTO
    it("should return 201 CREATED if a valid DTO is provided", async () => {
      const newUser = {
        email: "marcosnuero12@gmail.com",
        password: "1234",
      };

      const res = await request(API_BASE_URL).post("/users").send(newUser);
      const id = res.body.id;

      expect(res.statusCode).toBe(201);

      expect(res.body).toHaveProperty("id");
      expect(res.body).toHaveProperty("email");
      expect(res.body).toHaveProperty("password");

      const loginRes = await request(API_BASE_URL)
        .post("/auth/login")
        .send(newUser);

      const accessToken = loginRes.body.accessToken;

      await request(API_BASE_URL)
        .delete(`/users/${id}`)
        .set("Authorization", `Bearer ${accessToken}`);
    });

    // CORRECTO
    it("should freturn 409 if a user already created is provided", async () => {
      const newUser = {
        email: "marcosnuero1@gmail.com",
        password: "1234",
      };
      const res = await request(API_BASE_URL).post("/users").send(newUser);
      expect(res.statusCode).toBe(409);
    });
  });

  describe("GET", () => {
    it("should return 404 NOT FOUND if user id is not related with a user", async () => {
      const res = await request(API_BASE_URL)
        .get("/users/1000")
        .set("Authorization", `Bearer ${token}`);
      expect(res.statusCode).toBe(404);
    });

    it("should return 200 if user was found", async () => {
      const res = await request(API_BASE_URL)
        .get("/users/27")
        .set("Authorization", `Bearer ${token}`);
      expect(res.statusCode).toBe(200);
      expect(res.body).toHaveProperty("id");
      expect(res.body).toHaveProperty("email");
    });

    // CORRECTO
    it("should return 200 if users were found", async () => {
      const res = await request(API_BASE_URL)
        .get("/users")
        .set("Authorization", `Bearer ${token}`);
      expect(res.statusCode).toBe(200);
    });
  });

  describe("PUT", () => {
    // CAMBIAR SIEMPRE EL EMAIL YA QUE SIEMPRE QUE SE EJECUTE EL CODIGO A LA SIGUIENTE PRUEBA VA A FALLAR PORQUE YA SE CAMBIO PREVIAMENTE
    it("should return 200 if user was updated", async () => {
      const updatedUser = {
        email: "marcosnuero69@gmail.com",
        password: "1234",
      };

      const res = await request(API_BASE_URL)
        .patch("/users/30")
        .send(updatedUser)
        .set("Authorization", `Bearer ${token}`);
      expect(res.statusCode).toBe(200);
      expect(res.body).toHaveProperty("email");
      expect(res.body).toHaveProperty("password");
    });

    it("should return 404 if user id is not related with a user for update", async () => {
      // CORRECTO
      const updatedUser = {
        email: "marcosnuero11@gmail.com",
        password: "1234",
      };
      const res = await request(API_BASE_URL)
        .patch("/users/1000")
        .send(updatedUser)
        .set("Authorization", `Bearer ${token}`);
      expect(res.statusCode).toBe(404);
    });
  });

  // CAMBIAR SIEMPRE EL ID PORQUE DESPUES DE HACER UNA PRUEBA VA A FALLAR YA QUE YA FUE BORRADO
  describe("DELETE", () => {
    it("should return 200 if user was deleted", async () => {
      const res = await request(API_BASE_URL)
        .delete("/users/14")
        .set("Authorization", `Bearer ${token}`);
      expect(res.statusCode).toBe(200);
    });

    // CORRECTO
    it("should return 404 if user id is not related with a user for delete", async () => {
      const res = await request(API_BASE_URL)
        .delete("/users/1000")
        .set("Authorization", `Bearer ${token}`);
      expect(res.statusCode).toBe(404);
    });
  });
});
