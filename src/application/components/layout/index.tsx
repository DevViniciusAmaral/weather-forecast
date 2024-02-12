import React from "react";
import { stylesheet } from "./styles";
import { StatusBar } from "expo-status-bar";
import { useStyles } from "react-native-unistyles";
import {
  View,
  StyleProp,
  ViewStyle,
  ScrollView,
  ScrollViewProps,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

interface LayoutProps extends ScrollViewProps {
  header?: React.ReactNode;
  footer?: React.ReactNode;
  enablePaddingTop?: boolean;
  containerStyle?: StyleProp<ViewStyle>;
}

export const Layout = ({
  style,
  header,
  footer,
  children,
  scrollEnabled,
  containerStyle,
  enablePaddingTop,
  ...rest
}: LayoutProps) => {
  const { styles, theme } = useStyles(stylesheet);

  const { top } = useSafeAreaInsets();
  const paddingTop = enablePaddingTop ? top : 0;

  return (
    <View style={[styles.container(paddingTop), containerStyle]}>
      <StatusBar style="dark" backgroundColor={theme.colors.primary.main} />

      {header && <>{header}</>}

      {scrollEnabled ? (
        <ScrollView style={style} {...rest}>
          {children}
        </ScrollView>
      ) : (
        <View style={[styles.content, style]} {...rest}>
          {children}
        </View>
      )}

      {footer && <>{footer}</>}
    </View>
  );
};
