import React from "react";
import { View, Text, StatusBar,ScrollView } from "react-native";
import { styles } from "./Explore.styles";
import TopBar from "../../content/TopBar/TopBar";
import SearchBar from "../../content/SearchBar/SearchBar";
import Card from '../../content/Card/Card.js';

function Explore() {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#FFFFFF" barStyle="dark-content" />
      <TopBar />
      <SearchBar/>
      <ScrollView horizontal='true'><Card/></ScrollView>
      
    </View>
  );
}

export default Explore;
