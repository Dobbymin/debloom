import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

import { colorSemanticToken, colorToken, shadowToken } from "../../styles";
import { globalStyles } from "../global";

const config = defineConfig({
  cssVarsRoot: ":where(:root, :host)",
  cssVarsPrefix: "ck",

  globalCss: globalStyles,

  theme: {
    tokens: {
      colors: colorToken,
      shadows: shadowToken,
    },
    semanticTokens: {
      colors: colorSemanticToken,
    },
  },
});

export const system = createSystem(defaultConfig, config);
