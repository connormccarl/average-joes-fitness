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

import ViewImageScreen from "./app/screens/ViewImageScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import AppText from "./app/components/AppText";
import AppButton from "./app/components/AppButton";
import Card from "./app/components/Card";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import Screen from "./app/components/Screen";
import Icon from "./app/components/Icon";
import ListItem from "./app/components/ListItem";
import AccountScreen from "./app/screens/AccountScreen";
import ListingsScreen from "./app/screens/ListingsScreen";

import FitScreen from "./app/components/FitScreen";
import colors from "./app/config/colors";
import FitListItem from "./app/components/FitListItem";
import fitcolors from "./app/config/fitcolors";
import FitWorkoutsScreen from "./app/screens/FitHomeScreen";
import AppTextInput from "./app/components/AppTextInput";
import AppPicker from "./app/components/AppPicker";
import LoginScreen from "./app/screens/LoginScreen";
import FitButton from "./app/components/FitButton";
import FitLogo from "./app/components/FitLogo";
import FitLoginScreen from "./app/screens/FitLoginScreen";
import FitWelcomeScreen from "./app/screens/FitWelcomeScreen";
import RegisterScreen from "./app/screens/RegisterScreen";
import ListingEditScreen from "./app/screens/ListingEditScreen";
import FitProgressScreen from "./app/screens/FitProgressScreen";
import FitWorkoutScreen from "./app/screens/FitWorkoutScreen";

export default function App() {
  return <FitWorkoutScreen />;
}
