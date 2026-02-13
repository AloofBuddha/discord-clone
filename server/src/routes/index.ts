import { Router } from "express";
import healthRouter from "./health";

const router = Router();

router.use("/health", healthRouter);

// Future route registrations:
// router.use("/auth", authRouter);
// router.use("/users", usersRouter);
// router.use("/servers", serversRouter);
// router.use("/channels", channelsRouter);
// router.use("/messages", messagesRouter);

export default router;
