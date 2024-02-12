import React from "react";
import { Image, View } from "react-native";
import { useStyles } from "react-native-unistyles";
import { stylesheet } from "./styles";
import { Text } from "@components/base/text";

export const WeatherMapCard = () => {
  const { styles, theme } = useStyles(stylesheet);

  return (
    <View style={styles.container}>
      <View style={styles.horizontalContainer}>
        <View>
          <Text style={styles.tempLabel}>25°</Text>
          <Text style={styles.label()}>Sol e Vento</Text>
        </View>

        <Image
          style={styles.iconImage}
          source={{ uri: "https://openweathermap.org/img/wn/10d@2x.png" }}
        />
      </View>

      <View style={styles.divider} />

      <View style={styles.horizontalContainer}>
        <View style={styles.verticalContainer}>
            <Text style={styles.label(true)}>Vento</Text>
            <Text style={styles.label()}>12km/h</Text>
        </View>

        <View style={styles.verticalContainer}>
            <Text style={styles.label(true)}>Sensação térmica</Text>
            <Text style={styles.label()}>29°C</Text>
        </View>

        <View style={styles.verticalContainer}>
            <Text style={styles.label(true)}>Humidade</Text>
            <Text style={styles.label()}>67%</Text>
        </View>
      </View>
    </View>
  );
};
