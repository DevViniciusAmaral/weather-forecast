import { getCurrentPosition } from "./Location";
import { useWeatherMap } from "@stores/weather-map";
import { openWeatherMapService } from "@infrastructure/services/open-weather-map";

export const getOneCallWeatherMap = async () => {
  try {
    const { saveOneCallWeatherMap } = useWeatherMap();
    const coords = await getCurrentPosition();

    const { data } = await openWeatherMapService.oneCall(coords);
    saveOneCallWeatherMap(data);
  } catch (error) {
    throw error;
  }
};
