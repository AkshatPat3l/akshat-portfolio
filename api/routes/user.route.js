import express from "express";
import { testAPI, updateUser, deleteUser, signOutUser } from "../controllers/user.controller.js";
import { verifyToken } from "../utils/verifyUser.js";

const router = express.Router();

router.get("/test", testAPI);
router.put("/update/:id", verifyToken, updateUser);
router.delete("/delete/:id", verifyToken, deleteUser);
router.post('/sign-out',signOutUser)
export default router;
