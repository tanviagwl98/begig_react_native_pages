import React from "react";
import { StyleSheet, TextInput, View, Keyboard, Button } from "react-native";
import {styles} from './Search.styles';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const SearchBar = ({clicked, searchPhrase, setSearchPhrase, setCLicked}) => {
  return (
    <View style={styles.container}>
      <View
        style={
          clicked
            ? styles.searchBar__clicked
            : styles.searchBar__unclicked
        }
      >
        {/* search Icon */}
        <MaterialCommunityIcons name={"search-web"} size={22} />

        {/* Input field */}
        <TextInput
          style={styles.input}
          placeholder="Search Talent, Role or More"
          value={searchPhrase}
          onChangeText={setSearchPhrase}
          onFocus={() => {
            setClicked(true);
          }}
        />
        {/* cross Icon, depending on whether the search bar is clicked or not */}
        {clicked && (
            <MaterialCommunityIcons name={"account-circle-outline"} size={26} onPress={() => {
                setSearchPhrase("")
            }}/>
        )}
      </View>
      {/* cancel button, depending on whether the search bar is clicked or not */}
      {clicked && (
        <View>
          <Button
            title="Cancel"
            onPress={() => {
              Keyboard.dismiss();
              setClicked(false);
            }}
          ></Button>
        </View>
      )}
      <View style={styles.rightIcon}><MaterialCommunityIcons name={"filter"} size={22} />
      </View>
    </View>
  );
};
export default SearchBar;

