import React from "react";
import { View, Text, StatusBar,ScrollView } from "react-native";
import { styles } from "./ExploreOutput.styles";
import TopBar from "../../content/BackTopBar/BackTopBar";
import SearchBar from "../../content/SearchBar/SearchBar";
import ProfileCard from '../../content/ProfileCard/ProfileCard.js';

function ExploreOutput() {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#FFFFFF" barStyle="dark-content" />
      <TopBar />
      <SearchBar/>
      <ScrollView horizontal='true'><ProfileCard/></ScrollView>
    </View>
  );
}

export default ExploreOutput;
