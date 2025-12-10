import request from "supertest";
import { API_BASE_URL, getAuthToken } from "../utils";

describe("trainingPlan", () => {
  let token: string;

  beforeAll(async () => {
    token = await getAuthToken();
  });

  describe("POST", () => {
    // CORRECTO
    // CAMBIAR EL USERID CUANDO SE HAGA LA PRUEBA DEFINITIVA YA QUE SE ESTA CREANDO Y SALDRA ERROR POR DUPLICADO
    it("should return 201 CREATED if a valid DTO is provided", async () => {
      const newTrainingPlan = {
        name: "press banca 2",
        userId: 15,
      };
      const res = await request(API_BASE_URL)
        .post("/training-plans")
        .send(newTrainingPlan)
        .set("Authorization", `Bearer ${token}`);
      expect(res.statusCode).toBe(201);
    });

    // CORRECTO
    it("should return 409 if a trainingPlan is already created is provided", async () => {
      const newTrainingPlan = {
        name: "press banca",
        userId: 29,
      };
      const res = await request(API_BASE_URL)
        .post("/training-plans")
        .send(newTrainingPlan)
        .set("Authorization", `Bearer ${token}`);
      expect(res.statusCode).toBe(409);
    });
  });

  describe("GET", () => {
    // CORRECTO
    it("should return 404 NOT FOUND if trainingPlan id is not related with a trainingPlan", async () => {
      const res = await request(API_BASE_URL)
        .get("/training-plans/100")
        .set("Authorization", `Bearer ${token}`);
      expect(res.statusCode).toBe(404);
    });

    // CORRECTO
    it("should return 200 if trainingPlan was found", async () => {
      const res = await request(API_BASE_URL)
        .get("/training-plans/1")
        .set("Authorization", `Bearer ${token}`);
      expect(res.statusCode).toBe(200);
    });

    // CORRECTO
    it("should return 200 if trainingPlans were found", async () => {
      const res = await request(API_BASE_URL)
        .get("/training-plans")
        .set("Authorization", `Bearer ${token}`);
      expect(res.statusCode).toBe(200);
    });
  });

  describe("PUT", () => {
    //CORRECTO
    // CAMBIAR SIEMPRE EL EMAIL YA QUE SIEMPRE QUE SE EJECUTE EL CODIGO A LA SIGUIENTE PRUEBA VA A FALLAR PORQUE YA SE CAMBIO PREVIAMENTE
    it("should return 200 if trainingPlan was updated", async () => {
      const updatedTrainingPlan = {
        name: "press de hombro",
      };

      const res = await request(API_BASE_URL)
        .patch("/training-plans/1")
        .send(updatedTrainingPlan)
        .set("Authorization", `Bearer ${token}`);
      expect(res.statusCode).toBe(200);
    });

    // CORRECTO
    it("should return 404 if trainingPlan id is not related with a trainingPlan for update", async () => {
      const updatedTrainingPlan = {
        name: "press de hombro",
      };
      const res = await request(API_BASE_URL)
        .patch("/training-plans/100")
        .send(updatedTrainingPlan)
        .set("Authorization", `Bearer ${token}`);
      expect(res.statusCode).toBe(404);
    });
  });

  // CORRECTO
  // CAMBIAR SIEMPRE EL ID PORQUE DESPUES DE HACER UNA PRUEBA VA A FALLAR YA QUE YA FUE BORRADO
  describe("DELETE", () => {
    it("should return 200 if trainingPlan was deleted", async () => {
      const res = await request(API_BASE_URL)
        .delete("/training-plans/1")
        .set("Authorization", `Bearer ${token}`);
      expect(res.statusCode).toBe(200);
    });

    // CORRECTO
    it("should return 404 if trainingPlan id is not related with a trainingPlan for delete", async () => {
      const res = await request(API_BASE_URL)
        .delete("/training-plans/50")
        .set("Authorization", `Bearer ${token}`);
      expect(res.statusCode).toBe(404);
    });
  });
});
