import { OPEN_WEATHER_MAP_API_KEY } from "@env";
import { EOpenWeatherMapService } from "./models/EOpenWeatherMapService";
import { openWeatherMapApi } from "@infrastructure/api/open-weather-map";

export const openWeatherMapService: EOpenWeatherMapService = {
  oneCall: ({ latitude, longitude }) => {
    return openWeatherMapApi.get(
      `/onecall?lat=${latitude}&lon=${longitude}&units=metric&lang=pt_br&appid=${OPEN_WEATHER_MAP_API_KEY}`
    );
  },
};
