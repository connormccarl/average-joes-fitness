import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import FitWelcomeScreen from "../screens/FitWelcomeScreen";
import FitLoginScreen from "../screens/FitLoginScreen";

const Stack = createNativeStackNavigator();

const FitAuthNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Welcome"
      component={FitWelcomeScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen name="Login" component={FitLoginScreen} />
  </Stack.Navigator>
);

export default FitAuthNavigator;
