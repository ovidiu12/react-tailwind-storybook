import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import typescript from "rollup-plugin-typescript2";
import postcss from "rollup-plugin-postcss";

import packageJson from "./package.json";

const isProduction = process.env.NODE_ENV === "production";

export default {
  input: "./src/index.ts",
  output: [
    {
      file: packageJson.main,
      format: "cjs",
      sourcemap: true,
    },
    {
      file: packageJson.module,
      format: "esm",
      sourcemap: true,
    },
  ],
  plugins: [
    peerDepsExternal(),
    resolve(),
    commonjs(),
    postcss({
      config: {
        path: "./postcss.config.js",
      },
      extensions: [".css"],
      extract: true,
      minimize: isProduction,
      inject: {
        insertAt: "top",
      },
      // modules: true,
    }),
    typescript(),
  ],
  external: ["react", "react-dom"],
};
