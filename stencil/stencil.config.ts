// declare const require;
import { Config } from "@stencil/core";
import { sass } from "@stencil/sass";
// const path = require("path");

export const config: Config = {
  namespace: "mycomponent",
  outputTargets: [
    {
      type: "dist"
    },
    {
      type: "www",
      serviceWorker: null
    }
  ],
  plugins: [
    sass({
      injectGlobalPaths: ["src/theme/main.scss"]
    })
  ]
};
