import { stylesheet } from "./styles";
import React, { forwardRef } from "react";
import { Search } from "lucide-react-native";
import { TextInput } from "@components/text-input";
import { useStyles } from "react-native-unistyles";
import {
  View,
  ViewStyle,
  StyleProp,
  TextInputProps,
  TextInput as RNTextInput,
} from "react-native";

interface SearchbarProps extends TextInputProps {
  containerStyle?: StyleProp<ViewStyle>;
}

export const Searchbar = forwardRef<RNTextInput, SearchbarProps>(
  ({ containerStyle, ...rest }, ref) => {
    const { styles, theme } = useStyles(stylesheet);

    return (
      <View style={[styles.container, containerStyle]}>
        <Search size={20} color={theme.colors.primary.dark} />
        <TextInput ref={ref} {...rest} />
      </View>
    );
  }
);
