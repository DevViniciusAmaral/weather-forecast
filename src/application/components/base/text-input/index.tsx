import { stylesheet } from "./styles";
import React, { forwardRef } from "react";
import { useStyles } from "react-native-unistyles";
import { TextInput as RNTextInput, TextInputProps } from "react-native";

export const TextInput = forwardRef<RNTextInput, TextInputProps>(
  ({ style, ...rest }, ref) => {
    const { styles, theme } = useStyles(stylesheet);

    return (
      <RNTextInput
        ref={ref}
        autoComplete="off"
        autoCapitalize="none"
        style={[styles.input, style]}
        placeholderTextColor={theme.colors.primary.dark}
        {...rest}
      />
    );
  }
);
