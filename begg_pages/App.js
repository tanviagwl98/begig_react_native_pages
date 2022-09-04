import * as React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Explore from "./assets/components/Explore/Explore.js";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./assets/components/Home/Home.js";
import ExploreSearch from "./assets/components/ExploreSearch/ExploreSearch.js";

const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Explore"
        inactiveColor="#ececec"
        activeColor="blue"
        barStyle={{ backgroundColor: "white" }}
      >
        <Tab.Screen
          name="Home"
          component={ExploreSearch}
          options={{
            tabBarLabel: "Home",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name={"home"} color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Dashboard"
          component={Home}
          options={{
            tabBarLabel: "Dashboard",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="view-dashboard" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Chat"
          component={Home}
          options={{
            tabBarLabel: "Chat",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons
                name="chat"
                color={color}
                size={26}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Explore"
          component={Explore}
          options={{
            tabBarLabel: "Explore",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons
                name="search-web"
                color={color}
                size={26}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
