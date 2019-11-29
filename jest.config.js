const TEST_REGEX = "(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|js?|tsx?|ts?)$";

module.exports = {
  collectCoverageFrom: [
    "**/*.{js,jsx,ts,tsx}",
    "!*.{js,ts}",
    "!**/*.d.ts",
    "!**/*styles.{ts, tsx}"
  ],
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  testRegex: TEST_REGEX,
  transform: {
    "^.+\\.(ts|tsx)$": ["ts-jest"]
  },
  testPathIgnorePatterns: ["<rootDir>/node_modules/", "<rootDir>/coverage"],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json"],
  coverageDirectory: "<rootDir>/coverage/",
  coveragePathIgnorePatterns: ["<rootDir>/__tests__", "<rootDir>/coverage"]
};
