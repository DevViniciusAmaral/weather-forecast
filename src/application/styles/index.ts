import { appThemes } from "./AppThemes";
import { breakpoints } from "./Breakpoints";
import { UnistylesRegistry } from "react-native-unistyles";

UnistylesRegistry.addBreakpoints(breakpoints).addThemes(appThemes).addConfig({
  adaptiveThemes: true,
  initialTheme: "light",
});
