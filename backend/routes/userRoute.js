import express from "express";
import { User } from "../models/userModel.js";

const router = express.Router();
// router.use(express.json());

// Create
router.post("/", async (req, res) => {
  try {
    const { name, email, age } = req.body;
    if (!name || !email || !age) {
      return res.status(400).send({
        message: "Send all required fields: name, email, age",
      });
    }
    const newUser = {
      name: name,
      email: email,
      age: age,
    };

    const userAdded = await User.create(newUser);
    res.status(201).json(userAdded);
    // res.status(201).send(userAdded);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
});

// Show
router.get("/", async (req, res) => {
  try {
    const showAll = await User.find();
    res.status(200).json(showAll);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
});

// Show Specific
router.get("/:id", async (req, res) => {
  // const {id} = req.params
  try {
    const specificUser = await User.findById({ _id: req.params.id });
    res.status(200).json(specificUser);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err.message });
  }
});

// Delete
router.delete("/:id", async (req, res) => {
  try {
    const deleteUser = await User.deleteOne({ _id: req.params.id });
    res.status(200).json(deleteUser);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err.message });
  }
});

// Update
router.patch("/:id", async (req, res) => {
  const { name, email, age } = req.body;
  try {
    const updateUser = await User.findByIdAndUpdate(
      // { _id: req.params.id },
      // {
      //   $set: { name: name, email: email, age: age },
      // }
      req.params.id,
      req.body,
      { new: true }
    );

    res.status(200).json(updateUser);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err.message });
  }
});

export const userRouter = router;
