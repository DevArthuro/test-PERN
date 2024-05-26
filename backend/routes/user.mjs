import express from "express";
import { dbConnection } from "../db/index.mjs";

const app = express.Router();

app.get("/", async (_, res) => {
  try {
    const users = await dbConnection().user.findMany();
    res.status(200).send(users);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

export default app;
