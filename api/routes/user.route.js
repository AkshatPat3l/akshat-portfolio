import express from "express";
import { testAPI, updateUser } from "../controllers/user.controller.js";
import { verifyToken } from "../utils/verifyUser.js";

const router = express.Router();

router.get("/test", testAPI);
router.put("/update/:id", verifyToken, updateUser);

export default router;
