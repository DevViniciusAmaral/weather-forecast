import { IWeatherMap } from "..";
import { IOneCallResponse } from "@infrastructure/services/open-weather-map/models/IOneCallResponse";

interface ISaveOneCallWeatherMap {
  state: IWeatherMap;
  value: IOneCallResponse;
}

export const saveOneCallWeatherMap = ({
  state,
  value,
}: ISaveOneCallWeatherMap) => {
  const { lat, lon } = value;
  const { oneCallWeatherMap } = state;

  const exists = oneCallWeatherMap.find(
    (value) => value.lat === lat && value.lon === lon
  );

  return {
    ...state,
    oneCallWeatherMap: exists
      ? oneCallWeatherMap.map((item) =>
          item.lat === lat && item.lon === lon ? value : item
        )
      : [...oneCallWeatherMap, value],
  };
};