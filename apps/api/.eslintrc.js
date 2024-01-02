/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: ["@aha/eslint-config/server.js"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: true,
  },
};
