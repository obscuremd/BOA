import { Router } from "express";
import User from "../Models/UserModel";
import {
  checkAuth,
  deletes,
  login,
  logout,
  register,
  update,
} from "../Helpers/auth.controler";
const router = Router();

// create user
router.post("/register", register);

// login
router.post("/login", login);

// update user
router.put("/:id", update);

// delete user
router.delete("/:id", deletes);

router.get("/check-auth", checkAuth);

router.post("/logout", logout);

// find by email
router.get("/", async (req, res) => {
  try {
    const user = await User.find();
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json(error);
  }
});

export default router;
