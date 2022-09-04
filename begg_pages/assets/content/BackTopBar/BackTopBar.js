import React from "react";
import { View, Text } from "react-native";
import { styles } from "./BackTopBar.styles";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
// import BackButton from '../../content/BackButton/BackButton.js';      //<---- import Backbutton.js here
// import {withNavigation} from 'react-navigation';

function BackTopBar() {
  return (
    <View style={styles.navbar}>
      <View style={styles.leftContainer}>
        <MaterialCommunityIcons name={"less-than"} size={26} />
      </View>
      <View style={styles.rightContainer}>
        <View style={styles.rightIcon}>
          <MaterialCommunityIcons name={"bell-outline"} size={26} />
        </View>
        <View style={styles.rightIcon}>
          <MaterialCommunityIcons name={"bookmark-outline"} size={26} />
        </View>
      </View>
    </View>
  );
}

export default BackTopBar;
