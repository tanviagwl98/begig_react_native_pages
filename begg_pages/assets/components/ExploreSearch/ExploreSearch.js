import React from "react";
import { View, Text, StatusBar,ScrollView } from "react-native";
import { styles } from "./ExploreSearch.styles";
import TopBar from "../../content/TopBar/TopBar";
import SearchBar from "../../content/SearchBar/SearchBar";
import Tile from '../../content/Tile/Tile.js';

function ExploreSearch() {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#FFFFFF" barStyle="dark-content" />
      <TopBar />
      <SearchBar/>
      <ScrollView horizontal='true'><Tile/></ScrollView>
      
    </View>
  );
}

export default ExploreSearch;
