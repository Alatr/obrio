const nextJest = require("next/jest");

const createJestConfig = nextJest({
  dir: "./",
});

const customJestConfig = {
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  testEnvironment: "jest-environment-jsdom",
  testMatch: ["**/?(*.)+(spec|test).[tj]s?(x)"],
  transformIgnorePatterns: ["<rootDir>/node_modules"],
};

module.exports = createJestConfig(customJestConfig);
