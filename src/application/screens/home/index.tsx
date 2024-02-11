import React from "react";
import { View } from "react-native";
import { stylesheet } from "./styles";
import { Text } from "@components/base/text";
import { useStyles } from "react-native-unistyles";

export const Home = () => {
  const { styles } = useStyles(stylesheet);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home</Text>
    </View>
  );
};
