import { Router, Request, Response } from "express";
import { ApiResponse } from "../types";

const router = Router();

router.get("/", (_req: Request, res: Response) => {
  const response: ApiResponse<{
    status: string;
    timestamp: string;
    uptime: number;
    environment: string;
  }> = {
    success: true,
    data: {
      status: "ok",
      timestamp: new Date().toISOString(),
      uptime: process.uptime(),
      environment: process.env.NODE_ENV || "development",
    },
  };
  res.json(response);
});

export default router;
