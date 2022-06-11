import React, { useState } from "react";

import {
  ImageBackground,
  StyleSheet,
  View,
  Text,
  Button,
  TextInput,
  Switch,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import FitAppNavigator from "./app/navigation/FitAppNavigator";

export default function App() {
  return (
    <NavigationContainer>
      <FitAppNavigator />
    </NavigationContainer>
  );
}
