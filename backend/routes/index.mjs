import user from "./user.mjs";
import express from "express";

const app = express.Router();

app.use("/users", user);

export default app;
