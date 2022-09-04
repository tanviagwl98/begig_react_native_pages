import { React } from "react";
import { View, Text, StatusBar, ScrollView } from "react-native";
import { styles } from "./Tile.styles";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const dataCard = [
  {
    title: "Recent Searches",
    properties: ["Java", "JavaScript", "HTML", "Angular", "CSS"],
  },
  {
    title: "Popular Searches",
    properties: ["Full Stack Developer", "Data Science", "Backend Developer"],
  },
];
const Tile = (props) => {
  return (
    <View style={styles.container}>
      {dataCard.map((item) => {
        return (
          <View style={styles.container}>
            <Text style={styles.title}>{item.title}</Text>
            <View style={styles.tilesDirection}>
              {item.properties.map((propItem, index) => {
                return (
                  <View key={propItem.id} style={styles.card}>
                    <View style={styles.iconBox}>
                      <MaterialCommunityIcons
                        style={styles.icon}
                        name="cog-counterclockwise"
                        size={28}
                        color="#696969"
                      />
                      <Text style={styles.role}>{propItem}</Text>
                    </View>
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

export default Tile;
