import { createSystem, defaultConfig, defineConfig } from '@chakra-ui/react';

import { globalStyles } from './global-style';

const config = defineConfig({
  cssVarsRoot: ':where(:root, :host)',
  cssVarsPrefix: 'ck',

  globalCss: globalStyles,

  theme: {
    tokens: {
      colors: {},
    },
  },
});

export const system = createSystem(defaultConfig, config);
