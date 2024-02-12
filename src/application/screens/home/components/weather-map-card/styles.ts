import { createStyleSheet } from "react-native-unistyles";

export const stylesheet = createStyleSheet((theme) => ({
  container: {
    gap: 16,
    borderRadius: 8,
    paddingBottom: 16,
    paddingHorizontal: 16,
    backgroundColor: theme.colors.secondary.main,
  },

  horizontalContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  verticalContainer: {
    alignItems: "center",
    justifyContent: "center",
  },

  divider: {
    borderWidth: 0.2,
    borderColor: theme.colors.primary.light,
  },

  tempLabel: {
    fontFamily: theme.fonts.bold,
    fontSize: theme.sizes.extraLarge,
    color: theme.colors.primary.main,
  },

  label: (secondary?: boolean) => ({
    color: secondary ? theme.colors.border : theme.colors.primary.main,
    fontSize: secondary ? theme.sizes.small : theme.sizes.default,
  }),

  iconImage: {
    width: 100,
    height: 100,
  },
}));
