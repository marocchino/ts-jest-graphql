module.exports = {
  moduleFileExtensions: ["ts", "tsx", "js", "jsx"],
  testMatch: ["<rootDir>*.spec.(js|jsx|ts|tsx)"],
  transform: {
    "\\.graphql$": "jest-transform-graphql",
    "\\.tsx?$": "ts-jest"
  }
};
