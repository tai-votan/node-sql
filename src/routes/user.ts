import express from "express";
import user from "../controllers/user";

const router = express.Router();

router.get("/", user.find);
router.post("/register", user.register);

export default router;
