import { createStyleSheet } from "react-native-unistyles";

export const stylesheet = createStyleSheet((theme) => ({
  container: {
    gap: 16,
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: theme.colors.secondary.main,
  },

  content: {
    padding: 16,
  },

  iconImage: (secondary?: boolean) => ({
    width: secondary ? 50 : 200,
    height: secondary ? 50 : 200,
  }),

  timezone: {
    fontFamily: theme.fonts.medium,
    color: theme.colors.primary.main,
  },

  dateString: {
    textTransform: "capitalize",
    fontSize: theme.sizes.large,
    fontFamily: theme.fonts.medium,
    color: theme.colors.primary.main,
  },

}));
