import request from "supertest";
import { API_BASE_URL, getAuthToken } from "../utils";

describe("workout", () => {
  let token: string;

  beforeAll(async () => {
    token = await getAuthToken();
  });

  describe("POST", () => {
    // CORRECTO
    // CAMBIAR EL USERID CUANDO SE HAGA LA PRUEBA DEFINITIVA YA QUE SE ESTA CREANDO Y SALDRA ERROR POR DUPLICADO
    it("should return 201 CREATED if a valid DTO is provided", async () => {
      const newWorkout = {
        trainingPlanId: 2,
        plannedAt: "2026-11-10T20:30:00Z",
      };
      const res = await request(API_BASE_URL)
        .post("/workouts")
        .send(newWorkout)
        .set("Authorization", `Bearer ${token}`);
      expect(res.statusCode).toBe(201);
    });

    // CORRECTO
    it("should return 409 if a workout is already created is provided", async () => {
      const newWorkout = {
        trainingPlanId: 1,
        plannedAt: "2026-11-10T20:30:00Z",
      };
      const res = await request(API_BASE_URL)
        .post("/workouts")
        .send(newWorkout)
        .set("Authorization", `Bearer ${token}`);
      expect(res.statusCode).toBe(409);
    });
  });

  describe("GET", () => {
    // CORRECTO
    it("should return 404 NOT FOUND if workout id is not related with a workout", async () => {
      const res = await request(API_BASE_URL)
        .get("/workouts/100")
        .set("Authorization", `Bearer ${token}`);
      expect(res.statusCode).toBe(404);
    });

    // CORRECTO
    it("should return 200 if workout was found", async () => {
      const res = await request(API_BASE_URL)
        .get("/workouts/3")
        .set("Authorization", `Bearer ${token}`);
      expect(res.statusCode).toBe(200);
    });

    // CORRECTO
    it("should return 200 if workouts were found", async () => {
      const res = await request(API_BASE_URL)
        .get("/workouts")
        .set("Authorization", `Bearer ${token}`);
      expect(res.statusCode).toBe(200);
    });
  });

  describe("PUT", () => {
    //CORRECTO
    it("should return 200 if workout was updated", async () => {
      const updatedWorkout = {
        plannedAt: "2027-11-03T17:39:10.785Z",
      };

      const res = await request(API_BASE_URL)
        .patch("/workouts/3")
        .send(updatedWorkout)
        .set("Authorization", `Bearer ${token}`);
      expect(res.statusCode).toBe(200);
    });

    // CORRECTO
    it("should return 404 if workout id is not related with a workout for update", async () => {
      const updatedWorkout = {
        plannedAt: "2026-11-03T17:39:10.785Z",
      };
      const res = await request(API_BASE_URL)
        .patch("/workouts/100")
        .send(updatedWorkout)
        .set("Authorization", `Bearer ${token}`);
      expect(res.statusCode).toBe(404);
    });
  });

  // CORRECTO
  // CAMBIAR SIEMPRE EL ID PORQUE DESPUES DE HACER UNA PRUEBA VA A FALLAR YA QUE YA FUE BORRADO
  describe("DELETE", () => {
    it("should return 200 if workout was deleted", async () => {
      const res = await request(API_BASE_URL)
        .delete("/workouts/2")
        .set("Authorization", `Bearer ${token}`);
      expect(res.statusCode).toBe(200);
    });

    // CORRECTO
    it("should return 404 if workout id is not related with a workout for delete", async () => {
      const res = await request(API_BASE_URL)
        .delete("/workouts/50")
        .set("Authorization", `Bearer ${token}`);
      expect(res.statusCode).toBe(404);
    });
  });
});
