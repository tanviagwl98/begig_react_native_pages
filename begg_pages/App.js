import * as React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Explore from "./assets/components/Explore/Explore.js";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./assets/components/Home/Home.js";
import ExploreSearch from "./assets/components/ExploreSearch/ExploreSearch.js";
import ExploreOutput from "./assets/components/ExploreOutput/ExploreOutput.js";

const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return <ExploreOutput />;
}
