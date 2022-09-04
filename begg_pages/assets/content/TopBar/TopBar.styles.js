import {StyleSheet} from 'react-native';

export const styles =  StyleSheet.create({
    container: {
      backgroundColor: '#fff',
      flexDirection:'row',
      display:'flex',
    },
    navBar: {
      height: 54,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      borderBottomWidth: 0,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.8,
      shadowRadius: 4,
      backgroundColor:'#fff',
      borderWidth:0
    },
    leftContainer: {   
      float:'left',
      marginLeft:-10,
      padding:13,
      marginRight:30
    },
    rightContainer: {
      flexDirection: 'row',
      float:'right',
      marginLeft:270,
      marginTop:-50
    },
    rightIcon: {
      margin:10,
      backgroundColor: 'white',
      marginLeft:5
      }

  });
  
  