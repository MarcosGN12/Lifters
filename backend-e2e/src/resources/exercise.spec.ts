import request from "supertest";
import { API_BASE_URL, getAuthToken } from "../utils";

describe("exercise", () => {
  let token: string;

  beforeAll(async () => {
    token = await getAuthToken();
  });

  describe("POST", () => {
    // CORRECTO
    // CAMBIAR EL USERID CUANDO SE HAGA LA PRUEBA DEFINITIVA YA QUE SE ESTA CREANDO Y SALDRA ERROR POR DUPLICADO
    it("should return 201 CREATED if a valid DTO is provided", async () => {
      const newExercise = {
        name: "press banca",
        userId: 15,
      };
      const res = await request(API_BASE_URL)
        .post("/exercises")
        .send(newExercise)
        .set("Authorization", `Bearer ${token}`);
      expect(res.statusCode).toBe(201);
      expect(res.body).toHaveProperty("id");
      expect(res.body).toHaveProperty("name");
      expect(res.body).toHaveProperty("userId");
    });

    // CORRECTO
    it("should return 409 if a exercise is already created is provided", async () => {
      const newExercise = {
        name: "curl de ",
        userId: 22,
      };
      const res = await request(API_BASE_URL)
        .post("/exercises")
        .send(newExercise)
        .set("Authorization", `Bearer ${token}`);
      expect(res.statusCode).toBe(409);
    });

    // CORRECTO
    it("should return 404 if a user id provided not exist", async () => {
      const newExercise = {
        name: "curl de araña",
        userId: 100,
      };
      const res = await request(API_BASE_URL)
        .post("/exercises")
        .send(newExercise)
        .set("Authorization", `Bearer ${token}`);
      expect(res.statusCode).toBe(404);
    });
  });

  describe("GET", () => {
    // CORRECTO
    it("should return 404 NOT FOUND if exercise id is not related with a exercise", async () => {
      const res = await request(API_BASE_URL)
        .get("/exercises/100")
        .set("Authorization", `Bearer ${token}`);
      expect(res.statusCode).toBe(404);
    });

    // CORRECTO
    it("should return 200 if exercise was found", async () => {
      const res = await request(API_BASE_URL)
        .get("/exercises/1")
        .set("Authorization", `Bearer ${token}`);
      expect(res.statusCode).toBe(200);
      expect(res.body).toHaveProperty("id");
      expect(res.body).toHaveProperty("name");
      expect(res.body).toHaveProperty("userId");
    });

    // CORRECTO
    it("should return 200 if exercises were found", async () => {
      const res = await request(API_BASE_URL)
        .get("/exercises")
        .set("Authorization", `Bearer ${token}`);
      expect(res.statusCode).toBe(200);
    });
  });

  describe("PUT", () => {
    //CORRECTO
    // CAMBIAR SIEMPRE EL EMAIL YA QUE SIEMPRE QUE SE EJECUTE EL CODIGO A LA SIGUIENTE PRUEBA VA A FALLAR PORQUE YA SE CAMBIO PREVIAMENTE
    it("should return 200 if exercise was updated", async () => {
      const updatedExercise = {
        name: "press de hombro",
      };

      const res = await request(API_BASE_URL)
        .patch("/exercises/1")
        .send(updatedExercise)
        .set("Authorization", `Bearer ${token}`);
      expect(res.statusCode).toBe(200);
      expect(res.body).toHaveProperty("name");
    });

    // CORRECTO
    it("should return 404 if exercise id is not related with a exercise for update", async () => {
      const updatedExercise = {
        name: "press de hombro",
      };
      const res = await request(API_BASE_URL)
        .patch("/exercises/100")
        .send(updatedExercise)
        .set("Authorization", `Bearer ${token}`);
      expect(res.statusCode).toBe(404);
    });
  });

  // CORRECTO
  // CAMBIAR SIEMPRE EL ID PORQUE DESPUES DE HACER UNA PRUEBA VA A FALLAR YA QUE YA FUE BORRADO
  describe("DELETE", () => {
    it("should return 200 if exercise was deleted", async () => {
      const res = await request(API_BASE_URL)
        .delete("/exercises/1")
        .set("Authorization", `Bearer ${token}`);
      expect(res.statusCode).toBe(200);
    });

    // CORRECTO
    it("should return 404 if exercise id is not related with a exercise for delete", async () => {
      const res = await request(API_BASE_URL)
        .delete("/exercises/50")
        .set("Authorization", `Bearer ${token}`);
      expect(res.statusCode).toBe(404);
    });
  });
});
