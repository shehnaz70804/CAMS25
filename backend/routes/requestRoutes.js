import express from "express";
import { createRequest, getPendingRequests, updateRequestStatus } from "../controllers/requestController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", authMiddleware, createRequest);
router.get("/pending", authMiddleware, getPendingRequests);
router.put("/:id", authMiddleware, updateRequestStatus);

export default router;
