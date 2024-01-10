import alias from "@rollup/plugin-alias";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import { nodeResolve } from '@rollup/plugin-node-resolve';
import typescript from "@rollup/plugin-typescript";
import url from "@rollup/plugin-url";
import svgr from "@svgr/rollup";
import dts from "rollup-plugin-dts";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import packageJson from "./package.json" assert { type: "json" };
import postcss from "rollup-plugin-postcss";

export default [
  {
    input: "src/index.ts",
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
      url(),
      svgr({ icon: true }),
      commonjs(),
      alias({
        entries: [
          { find: "@", replacement: "./src/" },
          { find: /^~/, replacement: "" },
        ],
      }),
      typescript({ tsconfig: "./tsconfig.json" }),
      postcss({
        // --- if you want to make css file saperate from js file.. this needs to import css if we need to use package
        // extract:'index.css', 
        // inject: false,
        inject: true,
        modules: false,
        minimize: true,
      }),
      nodeResolve({
        extensions: ['.css']
      })
    ],
  },
  {
    input: "dist/esm/types/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    plugins: [peerDepsExternal(), dts(),],
    external: [/\.css$/],
  },
];
