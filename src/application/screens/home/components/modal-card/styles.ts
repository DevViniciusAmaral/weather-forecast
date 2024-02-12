import { createStyleSheet } from "react-native-unistyles";

export const stylesheet = createStyleSheet((theme) => ({
  container: {
    elevation: 0.5,
    borderRadius: 8,
    paddingVertical: 8,
    alignItems: "center",
    paddingHorizontal: 16,
    justifyContent: "center",
    backgroundColor: theme.colors.primary.light,
  },

  iconImage: (secondary?: boolean) => ({
    width: secondary ? 50 : 200,
    height: secondary ? 50 : 200,
  }),

  temp: {
    fontSize: theme.sizes.large,
    fontFamily: theme.fonts.bold,
  },

  hours: {
    fontSize: theme.sizes.small,
    fontFamily: theme.fonts.bold,
    color: theme.colors.primary.dark,
  },
}));
