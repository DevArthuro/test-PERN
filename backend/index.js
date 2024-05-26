const express = require("express");
const { PrismaClient } = require("@prisma/client");

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
app.get("/test-api-healthy", (_, res) => {
  try {
    res.status(200).send({ message: "Api is working" });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

const PORT = process.env.PORT ?? 4000;

app.listen(PORT, () => {
  console.log("The api is working");
});
