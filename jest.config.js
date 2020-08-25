module.exports = {
  preset: 'ts-jest',
  moduleFileExtensions: ["ts", "vue", "js"],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
  },
  transform: {
    "^.+\\.ts$": "ts-jest",
    ".*\\.(vue)$": "<rootDir>/node_modules/vue-jest",
  }
};
