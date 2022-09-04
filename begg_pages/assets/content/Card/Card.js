import { React, useState } from "react";
import { View, Text, StatusBar, ScrollView } from "react-native";
import { styles } from "./Card.styles";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const dataCard = [
  {
    title: "Frontend Developer",
    properties: [
      {
        id:"1",
        icon: "react",
        color: "#4668D6",
        role: "React Native",
        quantity: "20 Candidates Available",
      },
      {
        id:"2",
        icon: "react",
        color: "#4668D6",
        role: "React Native",
        quantity: "20 Candidates Available",
      },
    ],
  },
  {
    title: "Backend Developer",
    properties: [
      {
        id: "3",
        icon: "react",
        color: "#4668D6",
        role: "NodeJS Developer ",
        quantity: "10 Candidates Available",
      },
    ],
  },
];
const Card = (props) => {
  return (
    <View horizontal={true} style={styles.container}>
      {dataCard.map((item) => {
        return (
          <View style={styles.container}>
            <Text style={styles.title}>{item.title}</Text>
            <ScrollView horizontal={true}>
            {item.properties.map((propItem, index) => {
              return (
                <View key={propItem.id} style={styles.card}>
                  <View style={styles.iconBox}>
                    <MaterialCommunityIcons
                      style={styles.icon}
                      name={propItem.icon}
                      size={28}
                      color={propItem.color}
                    />
                  </View>
                  <View style={styles.bottomText}>
                    <Text style={styles.role}>{propItem.role}</Text>
                    <Text style={styles.quantity}>{propItem.quantity}</Text>
                  </View>
                </View>
              );
            })}</ScrollView>
          </View>
        );
      })}
    </View>
  );
};

export default Card;
