import express from "express";
import { dbConnection as db } from "../db/index.mjs";

const app = express.Router();

// get all users
app.get("/", async (_, res) => {
  try {
    const users = await db().user.findMany();
    res.status(200).send(users);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

// get unique user by id
app.get("/:id_user", async (req, res) => {
  try {
    const { id_user } = req.params;
    const user = await db().user.findUnique({
      where: {
        id: Number(id_user),
      },
    });
    res.status(200).send(user);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

// Create user
app.post("/", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const user = await db().user.create({
      data: {
        name,
        email,
        password,
      },
    });
    res.status(200).send(user);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

// Edit user
app.patch("/:id_user", async (req, res) => {
  try {
    const { name, email } = req.body; // Just allow update this attributes
    if (!!!name && !!!email) {
      // Validate if any attribute change
      res
        .status(400)
        .send({ message: "not receipt any attribute allowed for change" });
    }
    const { id_user } = req.params;
    const user = await db().user.update({
      where: {
        id: Number(id_user),
      },
      data: { name, email },
    });
    res.status(200).send(user);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

// Delete user
app.delete("/:id_user", async (req, res) => {
  try {
    const { id_user } = req.params;
    const user = await db().user.delete({
      where: {
        id: Number(id_user),
      },
    });
    res.status(200).send(user);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

export default app;
