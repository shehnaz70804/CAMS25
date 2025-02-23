import express from "express";
import { createRequest, getPendingRequests, updateRequestStatus } from "../controllers/requestController.js";
import authMiddleware from "../middleware/authMiddleware.js";
import roleMiddleware from "../middleware/roleMiddleware.js";

const router = express.Router();

router.post("/", authMiddleware, createRequest);
router.get("/pending", authMiddleware, roleMiddleware("mentor"), getPendingRequests);
router.put("/:id", authMiddleware, roleMiddleware("mentor"), updateRequestStatus);

export default router;
