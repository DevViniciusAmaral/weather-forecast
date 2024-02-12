import { createStyleSheet } from "react-native-unistyles";

export const stylesheet = createStyleSheet((theme) => ({
  container: {
    padding: 16,
    width: "100%",
  },

  content: {
    padding: 16,
    borderRadius: 12,
    backgroundColor: theme.colors.secondary.dark,
  },

  horizontalContainer: {
    flexDirection: "row",
    alignItems: "center",
  },

  verticalContainer: (center?: boolean) => ({
    flex: 1,
    alignItems: center ? "center" : "flex-start",
  }),

  divider: {
    borderWidth: 0.2,
    marginVertical: 8,
    borderColor: theme.colors.border,
  },

  temp: {
    fontSize: theme.sizes.extraLarge,
    color: theme.colors.primary.main,
  },

  description: {
    fontFamily: theme.fonts.medium,
    color: theme.colors.primary.main,
  },

  hours: {
    color: theme.colors.border,
    fontSize: theme.sizes.small,
  },

  label: (secondary?: boolean) => ({
    fontSize: secondary ? theme.sizes.small : theme.sizes.default,
    fontFamily: secondary ? theme.fonts.regular : theme.fonts.medium,
    color: secondary ? theme.colors.border : theme.colors.primary.main,
  }),
}));
