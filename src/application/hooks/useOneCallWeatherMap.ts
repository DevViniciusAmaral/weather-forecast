import { getCurrentPosition } from "@utils/Location";
import { openWeatherMapService } from "@infrastructure/services/open-weather-map";

export const useOneCallWeatherMap = () => {
  const fetchOneCallWeatherMap = async () => {
    try {
    //   const coords = await getCurrentPosition();
      // console.log(JSON.stringify(coords, null, 2));

      const coords = {
        latitude: -2.5664942039956857,
        longitude: -44.23569005783894,
      };

      const { data } = await openWeatherMapService.oneCall(coords);
      return data;
    } catch (error) {
      throw error;
    }
  };

  return { fetchOneCallWeatherMap };
};
