import React from "react";
import { stylesheet } from "./styles";
import { useStyles } from "react-native-unistyles";
import { Text as RNText, TextProps } from "react-native";

export const Text = ({ style, ...rest }: TextProps) => {
  const { styles } = useStyles(stylesheet);

  return <RNText style={[styles.text, style]} {...rest} />;
};
