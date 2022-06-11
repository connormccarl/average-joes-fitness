import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import FitHomeScreen from "../screens/FitHomeScreen";
import FitWorkoutScreen from "../screens/FitWorkoutScreen";
import FitProgressScreen from "../screens/FitProgressScreen";
import FitWorkoutDetailsScreen from "../screens/FitWorkoutDetailsScreen";
import FitWorkoutEditScreen from "../screens/FitWorkoutEditScreen";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const HomeNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Home"
      component={FitHomeScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="WorkoutDetails"
      component={FitWorkoutDetailsScreen}
      options={({ route }) => ({ title: route.params.title })}
    />
    <Stack.Screen
      name="WorkoutAdd"
      component={FitWorkoutEditScreen}
      options={{ title: "Add Workout" }}
    />
  </Stack.Navigator>
);

const FitAppNavigator = () => (
  <Tab.Navigator screenOptions={{ headerShown: false }}>
    <Tab.Screen
      name="Home"
      component={HomeNavigator}
      options={{
        tabBarIcon: ({ size, color }) => (
          <MaterialIcons name="home" size={size} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="Workout"
      component={FitWorkoutScreen}
      options={{
        tabBarIcon: ({ size, color }) => (
          <MaterialIcons name="fitness-center" size={size} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="Progress"
      component={FitProgressScreen}
      options={{
        tabBarIcon: ({ size, color }) => (
          <MaterialIcons name="bar-chart" size={size} color={color} />
        ),
      }}
    />
  </Tab.Navigator>
);

export default FitAppNavigator;
