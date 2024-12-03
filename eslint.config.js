import typescriptParser from "@typescript-eslint/parser";
import eslintPluginPrettier from "eslint-plugin-prettier";
import typescriptEslintPlugin from "@typescript-eslint/eslint-plugin";

export default [
    {
        ignores: ["node_modules", "dist", "build", "coverage"],
    },
    {
        files: ["src/**/*.{ts,tsx}"],
        languageOptions: {
            ecmaVersion: 2021,
            sourceType: "module",
            parser: typescriptParser,
            parserOptions: {
                ecmaFeatures: { jsx: true },
            },
        },
        plugins: {
            "@typescript-eslint": typescriptEslintPlugin,
            prettier: eslintPluginPrettier,
        },
        rules: {
            "prettier/prettier": "error",
            "@typescript-eslint/no-unused-vars": "warn",
        },
    },
];
