import request from "supertest";
import express from "express";

describe("GET /", () => {
  const app = express();

  app.get("/", (req, res) => {
    res.send("MoodFLOW Backend API");
  });

  it("should return the API message", async () => {
    const res = await request(app).get("/");

    expect(res.status).toBe(200);
    expect(res.text).toBe("MoodFLOW Backend API");
  });
});