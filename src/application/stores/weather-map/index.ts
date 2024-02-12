import { create } from "zustand";
import { database } from "@infrastructure/database";
import { saveOneCallWeatherMap } from "./SaveOneCallWeatherMap";
import { persist, StateStorage, createJSONStorage } from "zustand/middleware";
import { IOneCallResponse } from "@infrastructure/services/open-weather-map/models/IOneCallResponse";

export interface IWeatherMap {
  oneCallWeatherMap: IOneCallResponse[];
  saveOneCallWeatherMap: (value: IOneCallResponse) => void;
}

const stateStorage: StateStorage = {
  getItem: (key: string) => database.getString(key),
  setItem: (key: string, newValue: string) => database.set(key, newValue),
  removeItem: (key: string) => database.delete(key),
};

export const useWeatherMap = create<IWeatherMap>()(
  persist(
    (set) => ({
      oneCallWeatherMap: [],
      saveOneCallWeatherMap:  (value: IOneCallResponse) =>
        set((state) => saveOneCallWeatherMap({ state, value })),
    }),
    {
      name: "oneCallWeatherMap",
      storage: createJSONStorage(() => stateStorage),
    }
  )
);
