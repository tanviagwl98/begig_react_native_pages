import { React, useState } from "react";
import { View, Text, StatusBar, ScrollView, Image } from "react-native";
import { styles } from "./ProfileCard.styles";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const ProfileCard = (props) => {
  const dataCard = [
    {
      name: "Nitin Malik",
      id: 1,
      role: "Full Stack Developer",
      match: "72% Match",
      hour: "1500/Hr",
      experience: "Senior (3-5Yr)",
      rating: "4.5",
      properties: ["React JS", "Javascript", "Anguar", "CSS"],
    },

    {
        name: "Nitin Malik",
        id: 2,
        role: "Full Stack Developer",
        match: "72% Match",
        hour: "1500/Hr",
        experience: "Senior (3-5Yr)",
        rating: "4.5",
        properties: ["React JS", "Javascript", "Anguar", "CSS"],
      },
  
      {
        name: "Nitin Malik",
        id: 3,
        role: "Full Stack Developer",
        match: "45% Match",
        hour: "1500/Hr",
        experience: "Senior (3-5Yr)",
        rating: "4.5",
        properties: ["React JS", "Javascript", "Anguar", "CSS"],
      },
  
  ];

  return (
    <View>
      {dataCard.map((item, index) => {
        return (
          <View key={item.id} style={styles.container}>
            <View style={styles.topTile}>
              <View style={styles.imageBox}>
                <Image
                  style={styles.image}
                  source={require("../../images/Administrator-icon.png")}
                />
              </View>
              <View style={styles.userDetails}>
                <View>
                  <Text style={styles.name}>{item.name}</Text>
                </View>
                <View>
                  <Text style={styles.role}>{item.role}</Text>
                </View>
                <View style={styles.match}>
                  <Text style={styles.percentage}>{item.match}</Text>
                </View>
              </View>
              <View style={styles.save}>
                <MaterialCommunityIcons name={"bookmark-outline"} size={22} />
              </View>
            </View>
            <View style={styles.middleBar}>
              <View style={styles.left}>
                <View style={styles.symbol}>
                  <Text style={styles.dollar}>$</Text>
                </View>
                <View style={styles.rate}>
                  <Text style={styles.price}>{item.hour}</Text>
                </View>
              </View>
              <View style={styles.middle}>
                <View>
                  <MaterialCommunityIcons
                    name={"bag-suitcase-outline"}
                    size={20}
                    color="#585CE5"
                  />
                </View>
                <View style={styles.rate}>
                  <Text style={styles.price}>{item.experience}</Text>
                </View>
              </View>
              <View style={styles.right}>
                <View>
                  <MaterialCommunityIcons
                    name={"star"}
                    size={20}
                    color="#FFC727"
                  />
                </View>
                <View style={styles.rate}>
                  <Text style={styles.price}>{item.rating}</Text>
                </View>
              </View>
            </View>
            <View style={styles.BottomTile}>
              {item.properties.map((i, key) => {
                return (
                  <View style={styles.skillsBox}>
                    <Text style={styles.skills}>{i}</Text>
                  </View>
                );
              })}
            </View>
          </View>
        );
      })}
    </View>
  );
};

export default ProfileCard;
