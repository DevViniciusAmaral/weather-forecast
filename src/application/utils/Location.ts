import * as Location from "expo-location";

export const getCurrentPosition = async () => {
  try {
    const { granted } = await Location.getForegroundPermissionsAsync();
    console.log("granted 1 =>", granted);

    if (!granted) {
      const { granted } = await Location.requestForegroundPermissionsAsync();
      console.log("granted 2 =>", granted);
      // if (!granted) return;
    }

    const { coords } = await Location.getCurrentPositionAsync();
    console.log("coords =>", JSON.stringify(coords, null, 2));
    return { latitude: coords.latitude, longitude: coords.longitude };
  } catch (error) {
    throw new Error("Permissão de localização negada");
  }
};
