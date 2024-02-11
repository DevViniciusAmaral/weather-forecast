import { createStyleSheet } from "react-native-unistyles";

export const stylesheet = createStyleSheet((theme) => ({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },

  title: {
    fontSize: 50,
    fontWeight: "bold",
  },
}));
