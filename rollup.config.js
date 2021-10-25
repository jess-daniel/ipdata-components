import babel from "@rollup/plugin-babel";
import resolve from "@rollup/plugin-node-resolve";
import { terser } from "rollup-plugin-terser";
import external from "rollup-plugin-peer-deps-external";
import commonjs from "@rollup/plugin-commonjs";

export default {
  input: "./src/index.js",
  output: {
    file: "dist/bundle.js",
    format: "esm",
    exports: "named",
    plugins: [terser()],
  },
  plugins: [
    resolve(),
    babel({
      babelHelpers: "bundled",
      exclude: "node_modules/**",
    }),
    external(),
    commonjs(),
  ],
  external: ["react", "react-dom"],
};
