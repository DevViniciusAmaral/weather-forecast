import { Text } from "@components/base/text";
import { OPEN_WEATHER_MAP_IMAGE_ICON_URL } from "@env";
import { formatDate } from "@utils/Date";
import React from "react";
import { Image, View } from "react-native";
import { useStyles } from "react-native-unistyles";
import { stylesheet } from "./styles";
import { IHourlyWeatherMap } from "@infrastructure/services/open-weather-map/models/IOneCallResponse";

interface ModalCardProps {
  data: IHourlyWeatherMap;
}

export const ModalCard = ({ data }: ModalCardProps) => {
  const { styles } = useStyles(stylesheet);

  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: `${OPEN_WEATHER_MAP_IMAGE_ICON_URL}/${data.weather[0].icon}@2x.png`,
        }}
        style={styles.iconImage(true)}
      />

      <Text style={styles.temp}>{Math.floor(data.temp)}°</Text>
      <Text style={styles.hours}>{formatDate(data.dt, "HH:mm")}</Text>
    </View>
  );
};
