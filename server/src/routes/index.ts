import { Router } from "express";
import healthRouter from "./health";
import authRouter from "./auth";

const router = Router();

router.use("/health", healthRouter);
router.use("/auth", authRouter);

// Future route registrations:
// router.use("/users", usersRouter);
// router.use("/servers", serversRouter);
// router.use("/channels", channelsRouter);
// router.use("/messages", messagesRouter);

export default router;