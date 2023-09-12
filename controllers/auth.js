import express from "express";
import User from "../models/user";
import bcrypt from "bcryptjs";
import { Jwt } from "jsonwebtoken";

// create the router
const router = express.Router();

// signup post
router.post("/signup", async (req, res) => {
  try {
    // hash password
    req.body.password = await bcrypt.hash(
      req.body.password,
      await bcrypt.genSalt(10)
    );

    // generate user
    const user = await User.create(req.body);

    // response
    res.json({ status: "User Created" });
  } catch (error) {
    res.status(400).json({ error });
  }
});

// login post
router.post("/login", async (req, res) => {});

// logout post
router.post("/logout", async (req, res) => {});
