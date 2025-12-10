import request from "supertest";
import { API_BASE_URL, getAuthToken } from "../utils";

describe("users", () => {
  let token: string;

  beforeAll(async () => {
    token = await getAuthToken();
  });

  // CORRECTO
  // CAMBIAR EL EMAIL CUANDO SE HAGA LA PRUEBA DEFINITIVA YA QUE SE ESTA CREANDO Y SALDRA ERROR POR DUPLICADO
  describe("POST", () => {
    it("should return 201 CREATED if a valid DTO is provided", async () => {
      const newUser = {
        email: "marcosnuero61@gmail.com",
        password: "1234",
      };
      const res = await request(API_BASE_URL).post("/users").send(newUser);
      expect(res.statusCode).toBe(201);
    });

    // CORRECTO
    it("should return 409 if a user already created is provided", async () => {
      const newUser = {
        email: "marcosnuero11@gmail.com",
        password: "1234",
      };
      const res = await request(API_BASE_URL).post("/users").send(newUser);
      expect(res.statusCode).toBe(409);
    });
  });

  describe("GET", () => {
    // CORRECTO
    it("should return 404 NOT FOUND if user id is not related with a user", async () => {
      const res = await request(API_BASE_URL)
        .get("/users/100")
        .set("Authorization", `Bearer ${token}`);
      expect(res.statusCode).toBe(404);
    });

    // CORRECTO
    it("should return 200 if user was found", async () => {
      const res = await request(API_BASE_URL)
        .get("/users/27")
        .set("Authorization", `Bearer ${token}`);
      expect(res.statusCode).toBe(200);
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
    //CORRECTO
    // CAMBIAR SIEMPRE EL EMAIL YA QUE SIEMPRE QUE SE EJECUTE EL CODIGO A LA SIGUIENTE PRUEBA VA A FALLAR PORQUE YA SE CAMBIO PREVIAMENTE
    it("should return 200 if user was updated", async () => {
      const updatedUser = {
        email: "marcosnuero62@gmail.com",
        password: "1234",
      };

      const res = await request(API_BASE_URL)
        .patch("/users/30")
        .send(updatedUser)
        .set("Authorization", `Bearer ${token}`);
      expect(res.statusCode).toBe(200);
    });

    it("should return 404 if user id is not related with a user for update", async () => {
      const updatedUser = {
        email: "marcosnuero11@gmail.com",
        password: "1234",
      };
      const res = await request(API_BASE_URL)
        .patch("/users/50")
        .send(updatedUser)
        .set("Authorization", `Bearer ${token}`);
      expect(res.statusCode).toBe(404);
    });
  });

  // CORRECTO
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
        .delete("/users/50")
        .set("Authorization", `Bearer ${token}`);
      expect(res.statusCode).toBe(404);
    });
  });
});
