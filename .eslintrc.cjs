module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  plugins: ["react-refresh"],
  rules: {
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    "import/extensions": [
      "error",
      "never",
      {
        js: "never",
        svg: "always",
        scss: "always",
        png: "always",
        css: "always",
        json: "always",
      },
    ],
  },
  settings: {
    "import/resolver": {
      typescript: {},
    },
  },
};
