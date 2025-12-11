import request from "supertest";
import { API_BASE_URL, getAuthToken } from "../utils";

describe("activities", () => {
  let token: string;

  beforeAll(async () => {
    token = await getAuthToken();
  });

  // CORRECTO
  // CAMBIAR EL EMAIL CUANDO SE HAGA LA PRUEBA DEFINITIVA YA QUE SE ESTA CREANDO Y SALDRA ERROR POR DUPLICADO
  describe("POST", () => {
    it("should return 201 CREATED if a valid DTO is provided", async () => {
      const newActivity = {
        sets: 3,
        reps: 8,
        weight: 0,
        results: [1],
        workout: 4,
        exercise: 2,
        workoutId: 4,
        exerciseId: 2,
      };
      const res = await request(API_BASE_URL)
        .post("/activities")
        .send(newActivity)
        .set("Authorization", `Bearer ${token}`);
      expect(res.statusCode).toBe(201);
      expect(res.body).toHaveProperty("id");
      expect(res.body).toHaveProperty("sets");
      expect(res.body).toHaveProperty("reps");
      expect(res.body).toHaveProperty("weight");
      expect(res.body).toHaveProperty("results");
      expect(res.body).toHaveProperty("workoutId");
      expect(res.body).toHaveProperty("exerciseId");
    });

    // CORRECTO
    it("should return 404 if a workout and exercise id provided not exist", async () => {
      const newActivity = {
        sets: 3,
        reps: 8,
        weight: 0,
        results: [1],
        workout: 4,
        exercise: 2,
        workoutId: 100,
        exerciseId: 100,
      };
      const res = await request(API_BASE_URL)
        .post("/activities")
        .send(newActivity)
        .set("Authorization", `Bearer ${token}`);
      expect(res.statusCode).toBe(404);
    });
  });

  describe("GET", () => {
    // CORRECTO
    it("should return 404 NOT FOUND if activity id is not related with a activity", async () => {
      const res = await request(API_BASE_URL)
        .get("/activities/100")
        .set("Authorization", `Bearer ${token}`);
      expect(res.statusCode).toBe(404);
    });

    // CORRECTO
    it("should return 200 if activity was found", async () => {
      const res = await request(API_BASE_URL)
        .get("/activities/2")
        .set("Authorization", `Bearer ${token}`);
      expect(res.statusCode).toBe(200);
      expect(res.body).toHaveProperty("id");
      expect(res.body).toHaveProperty("sets");
      expect(res.body).toHaveProperty("reps");
      expect(res.body).toHaveProperty("weight");
      expect(res.body).toHaveProperty("results");
      expect(res.body).toHaveProperty("workoutId");
      expect(res.body).toHaveProperty("exerciseId");
    });

    // CORRECTO
    it("should return 200 if activities were found", async () => {
      const res = await request(API_BASE_URL)
        .get("/activities")
        .set("Authorization", `Bearer ${token}`);
      expect(res.statusCode).toBe(200);
    });
  });

  describe("PUT", () => {
    //CORRECTO
    // CAMBIAR SIEMPRE EL EMAIL YA QUE SIEMPRE QUE SE EJECUTE EL CODIGO A LA SIGUIENTE PRUEBA VA A FALLAR PORQUE YA SE CAMBIO PREVIAMENTE
    it("should return 200 if activity was updated", async () => {
      const updatedActivity = {
        sets: 6,
        reps: 12,
        weight: 0,
        results: [1, 3, 5],
      };

      const res = await request(API_BASE_URL)
        .patch("/activities/2")
        .send(updatedActivity)
        .set("Authorization", `Bearer ${token}`);
      expect(res.statusCode).toBe(200);
      expect(res.body).toHaveProperty("sets");
      expect(res.body).toHaveProperty("reps");
      expect(res.body).toHaveProperty("weight");
      expect(res.body).toHaveProperty("results");
    });

    it("should return 404 if activity id is not related with a activity for update", async () => {
      const updatedActivity = {
        email: "marcosnuero11@gmail.com",
        password: "1234",
      };
      const res = await request(API_BASE_URL)
        .patch("/activities/50")
        .send(updatedActivity)
        .set("Authorization", `Bearer ${token}`);
      expect(res.statusCode).toBe(404);
    });
  });

  // CORRECTO
  // CAMBIAR SIEMPRE EL ID PORQUE DESPUES DE HACER UNA PRUEBA VA A FALLAR YA QUE YA FUE BORRADO
  describe("DELETE", () => {
    it("should return 200 if activity was deleted", async () => {
      const res = await request(API_BASE_URL)
        .delete("/activities/12")
        .set("Authorization", `Bearer ${token}`);
      expect(res.statusCode).toBe(200);
    });

    // CORRECTO
    it("should return 404 if activitiy id is not related with a activitiy for delete", async () => {
      const res = await request(API_BASE_URL)
        .delete("/activities/50")
        .set("Authorization", `Bearer ${token}`);
      expect(res.statusCode).toBe(404);
    });
  });
});
