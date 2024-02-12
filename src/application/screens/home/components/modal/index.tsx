import React from "react";
import { FlatList, Image, View } from "react-native";
import { useStyles } from "react-native-unistyles";
import { stylesheet } from "./styles";
import { Text } from "@components/base/text";
import { Button } from "@components/base/button";
import { ChevronRight } from "lucide-react-native";
import { formatDate } from "date-fns";
import { IOneCallResponse } from "@infrastructure/services/open-weather-map/models/IOneCallResponse";
import { OPEN_WEATHER_MAP_IMAGE_ICON_URL } from "@env";
import { ModalCard } from "../modal-card";

interface ModalProps {
  data: IOneCallResponse;
}

export const Modal = ({ data }: ModalProps) => {
  const { styles, theme } = useStyles(stylesheet);

  return (
    <View style={styles.container}>
      <View style={styles.horizontalContainer}>
        <Text style={styles.title}>Hoje</Text>

        <Button style={styles.horizontalContent}>
          <Text style={styles.subtitle}>Próximos 7 dias</Text>
          <ChevronRight size={20} color={theme.colors.primary.dark} />
        </Button>
      </View>

      <FlatList
        horizontal
        data={data.hourly}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.dt.toString()}
        renderItem={({ item }) => <ModalCard data={item} />}
        contentContainerStyle={{
          gap: 16,
          paddingRight: 16,
          paddingVertical: 2,
        }}
      />
    </View>
  );
};
