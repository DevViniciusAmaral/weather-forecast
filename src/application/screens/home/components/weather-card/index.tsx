import React from "react";
import { View } from "react-native";
import { useStyles } from "react-native-unistyles";
import { stylesheet } from "./styles";
import { Text } from "@components/base/text";
import { ICurrentWeatherMap } from "@infrastructure/services/open-weather-map/models/IOneCallResponse";
import { formatDate } from "@utils/Date";

interface WeatherCardProps {
  data: ICurrentWeatherMap;
}

export const WeatherCard = ({ data }: WeatherCardProps) => {
  const { styles } = useStyles(stylesheet);

  const sunrise = formatDate(data.sunrise * 1000, "HH");
  const sunset = formatDate(data.sunset * 1000, "HH");

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.horizontalContainer}>
          <View style={styles.verticalContainer()}>
            <Text style={styles.temp}>{Math.floor(data.temp)}°C</Text>
          </View>

          <View style={styles.verticalContainer()}>
            <Text style={styles.description}>
              {data.weather[0].description}
            </Text>

            <Text style={styles.hours}>
              {sunrise} am - {sunset} pm
            </Text>
          </View>
        </View>

        <View style={styles.divider} />

        <View style={styles.horizontalContainer}>
          <View style={styles.verticalContainer(true)}>
            <Text style={styles.label(true)}>Vento</Text>
            <Text style={styles.label()}>{Math.floor(data.wind_speed)} km/h</Text>
          </View>

          <View style={styles.verticalContainer(true)}>
            <Text style={styles.label(true)}>Pressão</Text>
            <Text style={styles.label()}>{data.pressure} mbar</Text>
          </View>

          <View style={styles.verticalContainer(true)}>
            <Text style={styles.label(true)}>Humidade</Text>
            <Text style={styles.label()}>{data.humidity} %</Text>
          </View>
        </View>
      </View>
    </View>
  );
};
