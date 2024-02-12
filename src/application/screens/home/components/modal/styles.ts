import { Dimensions } from "react-native";
import { createStyleSheet } from "react-native-unistyles";

export const stylesheet = createStyleSheet((theme) => ({
  container: {
    gap: 16,
    // bottom: 0,
    padding: 16,
    // position: "absolute",
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    width: Dimensions.get("screen").width,
    backgroundColor: theme.colors.primary.main,
  },

  horizontalContent: {
    flexDirection: "row",
    alignItems: "center",
  },

  title: {
    fontFamily: theme.fonts.bold,
  },

  subtitle: {
    fontFamily: theme.fonts.medium,
    color: theme.colors.primary.dark,
  },

  horizontalContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

}));
