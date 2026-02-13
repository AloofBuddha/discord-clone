// Test setup - runs before each test file
// Set test environment variables
process.env.NODE_ENV = 'test';
process.env.JWT_SECRET = 'test-secret';
process.env.JWT_EXPIRES_IN = '1h';
process.env.PORT = '0'; // Random port for tests
process.env.CORS_ORIGIN = 'http://localhost:3000';
