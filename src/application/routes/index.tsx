import React from "react";
import { NavigationContainer } from "@react-navigation/native";

// NAVIGATORS
import StackNavigator from "./StackNavigator";

export default function MainNavigator() {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}
