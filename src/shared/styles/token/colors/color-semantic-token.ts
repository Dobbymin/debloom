export const colorSemanticToken = {
  /* Core semantic */
  background: { value: "{colors.neutral.0}" },
  foreground: { value: "{colors.neutral.900}" },
  muted: { value: "{colors.neutral.100}" },
  mutedForeground: { value: "{colors.neutral.600}" },

  destructive: { value: "#e74c3c" },

  border: { value: "{colors.neutral.300}" },
  input: { value: "{colors.neutral.300}" },
  ring: { value: "{colors.primary.400}" },

  /* Functional */
  success: {
    DEFAULT: { value: "{colors.primary.500}" },
    bg: { value: "{colors.primary.100}" },
    border: { value: "{colors.primary.300}" },
  },
  warning: {
    DEFAULT: { value: "{colors.accent.500}" },
    bg: { value: "{colors.accent.100}" },
    border: { value: "{colors.accent.300}" },
  },
  danger: {
    DEFAULT: { value: "#e74c3c" },
    bg: { value: "#fadbd8" },
    border: { value: "#f1948a" },
  },
  info: {
    DEFAULT: { value: "#3498db" },
    bg: { value: "#d6eaf8" },
    border: { value: "#85c1e9" },
  },

  /* chart */
  chart: {
    1: { value: "{colors.primary.400}" },
    2: { value: "{colors.secondary.400}" },
    3: { value: "{colors.accent.400}" },
    4: { value: "{colors.secondary.300}" },
    5: { value: "{colors.primary.600}" },
  },

  /* sidebar (light) */
  sidebar: {
    DEFAULT: { value: "{colors.neutral.50}" },
    foreground: { value: "{colors.neutral.900}" },
    primary: { value: "{colors.primary.300}" },
    primaryForeground: { value: "{colors.neutral.900}" },
    accent: { value: "{colors.neutral.100}" },
    accentForeground: { value: "{colors.neutral.900}" },
    border: { value: "{colors.neutral.300}" },
    ring: { value: "{colors.primary.400}" },
  },
};
