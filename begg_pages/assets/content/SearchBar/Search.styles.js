import {StyleSheet} from 'react-native';

// styles
export const styles = StyleSheet.create({
    container: {
      margin: 15,
      justifyContent: "flex-start",
      alignItems: "center",
      flexDirection: "row",
      width: "95%",
  
    },
    searchBar__unclicked: {
      padding: 6,
      flexDirection: "row",
      width: "80%",
      backgroundColor: "white",
      borderRadius: 15,
      alignItems: "center",
      borderColor: '#ececec',
      borderWidth:1,
      marginLeft:10
    },
    searchBar__clicked: {
      padding: 10,
      flexDirection: "row",
      width: "80%",
      backgroundColor: "#d9dbda",
      borderRadius: 15,
      alignItems: "center",
      justifyContent: "space-evenly",
      marginLeft:10
    },
    input: {
      fontSize:15,
      marginLeft: 10,
      width: "90%",
    },
    rightIcon:{
        borderWidth:1,
        padding:8,
        borderColor:'#ececec',
        marginLeft:15,
        borderRadius:12 
    }
  });