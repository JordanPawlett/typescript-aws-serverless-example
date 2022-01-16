module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  modulePathIgnorePatterns: [
    "<rootDir>/.build",
    "<rootDir>/.serverless",
    "<rootDir>/__tests__/fixtures",
    "<rootDir>/__tests__/utils",
    "<rootDir>/__tests__/global-setup.js",
  ],
  clearMocks: true,
};
