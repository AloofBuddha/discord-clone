import http from "http";
import { Server as SocketIOServer } from "socket.io";
import app from "./app";
import { config } from "./utils/config";
import { logger } from "./utils/logger";

const server = http.createServer(app);

// Socket.io setup
const io = new SocketIOServer(server, {
  cors: {
    origin: config.cors.clientUrl,
    methods: ["GET", "POST"],
    credentials: true,
  },
  pingTimeout: 60000,
});

// Basic socket connection handler (will be expanded)
io.on("connection", (socket) => {
  logger.info(`Socket connected: ${socket.id}`);

  socket.on("disconnect", (reason) => {
    logger.info(`Socket disconnected: ${socket.id} - ${reason}`);
  });
});

// Start server
server.listen(config.port, () => {
  logger.info(`🚀 Server running on port ${config.port}`);
  logger.info(`📡 Environment: ${config.nodeEnv}`);
  logger.info(`🔗 Health check: http://localhost:${config.port}/api/health`);
});

// Graceful shutdown
function gracefulShutdown(signal: string) {
  logger.info(`${signal} received. Shutting down gracefully...`);
  server.close(() => {
    logger.info("HTTP server closed");
    process.exit(0);
  });
  // Force close after 10s
  setTimeout(() => {
    logger.error("Forced shutdown after timeout");
    process.exit(1);
  }, 10000);
}

process.on("SIGTERM", () => gracefulShutdown("SIGTERM"));
process.on("SIGINT", () => gracefulShutdown("SIGINT"));

export { io, server };
