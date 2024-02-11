import { OPEN_WEATHER_MAP_API_URL } from "@env";
import axios from "axios";

export const openWeatherMapApi = axios.create({
  baseURL: OPEN_WEATHER_MAP_API_URL,
});
