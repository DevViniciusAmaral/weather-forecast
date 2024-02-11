import React from "react";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";

export const Button = ({ ...rest }: TouchableOpacityProps) => {
  return <TouchableOpacity activeOpacity={0.8} {...rest} />;
};
