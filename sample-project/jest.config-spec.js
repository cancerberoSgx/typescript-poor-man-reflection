module.exports = {
  "testEnvironment": "node",
  "testRegex": "__tests__/.*\.*Test\.[t]sx?$",
  "transform": {
    ".(ts|tsx)": "ts-jest"
  },
  "rootDir":"./src", 
  "moduleFileExtensions": [
    "ts",
    "tsx",
    "js"
  ]
}