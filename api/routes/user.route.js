import express from "express";
import { testAPI } from "../controllers/user.controller.js";

const router = express.Router();

router.get("/test", testAPI);

export default router;
