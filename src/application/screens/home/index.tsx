import { stylesheet } from "./styles";
import React, { useEffect } from "react";
import { Layout } from "@components/layout";
import { ptBR } from "date-fns/locale";

// HOOKS
import { useStyles } from "react-native-unistyles";
import { useWeatherMap } from "@stores/weather-map";
import { useMutation } from "@tanstack/react-query";
import { useOneCallWeatherMap } from "@hooks/useOneCallWeatherMap";
import { FlatList, Image, View } from "react-native";
import { Text } from "@components/base/text";
import { ArrowRight, ChevronRight } from "lucide-react-native";
import { Button } from "@components/base/button";
import { format } from "date-fns";
import { StatusBar } from "expo-status-bar";
import { formatDate } from "@utils/Date";
import { Modal } from "./components/modal";
import { OPEN_WEATHER_MAP_IMAGE_ICON_URL } from "@env";
import { WeatherCard } from "./components/weather-card";

export const Home = () => {
  const { styles, theme } = useStyles(stylesheet);

  const { fetchOneCallWeatherMap } = useOneCallWeatherMap();
  const { oneCallWeatherMap, saveOneCallWeatherMap } = useWeatherMap();

  const weatherMap = oneCallWeatherMap.at(-1);
  const formattedDate = formatDate(weatherMap.current.dt, "E, dd MMMM, yyyy");
  const iconImage = {
    uri: `${OPEN_WEATHER_MAP_IMAGE_ICON_URL}/${weatherMap.current.weather[0].icon}@4x.png`,
  };

  const oneCallWeatherMapMutation = useMutation({
    mutationFn: fetchOneCallWeatherMap,
    mutationKey: ["fetchOneCallWeatherMap"],
    onSuccess: (data) => saveOneCallWeatherMap(data),
  });

  useEffect(() => {
    (async () => await oneCallWeatherMapMutation.mutateAsync())();
  }, []);

  return (
    <Layout enablePaddingTop style={styles.container}>
      <StatusBar style="light" backgroundColor={theme.colors.secondary.main} />

      <Text style={styles.timezone}>{weatherMap.timezone}</Text>
      <Text style={styles.dateString}>{formattedDate}</Text>
      <Image style={styles.iconImage()} source={iconImage} />

      <WeatherCard data={weatherMap.current} />

      <Modal data={weatherMap} />
    </Layout>
  );
};
