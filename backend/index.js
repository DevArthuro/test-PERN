import express from "express";
import { PrismaClient } from "@prisma/client";

const primaClient = new PrismaClient();

const app = express();

// Accept json
app.use(express.json());

// Cors configuration
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});

// Test Api with error for docker compare this container is healthy
app.get("test-api-healthy", (req, res) => {
  try {
    res.status(200).send({ message: "Api is working" });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});
