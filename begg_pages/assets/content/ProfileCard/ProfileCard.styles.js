import {StyleSheet} from 'react-native';

export const styles =  StyleSheet.create({
    container: {
      backgroundColor: '#fff',
      display:'flex',
      flexDirection:'column',
      borderWidth:1,
      borderRadius:15,
      borderColor:'#ececec',
      marginVertical:10
      
    },
    topTile:{
      flexDirection:'row',
      display:'flex',
      padding:14,
    },

    imageBox:{
      alignSelf:'flex-start',
      width:90,
      height:90,
      borderWidth:1,
      borderColor:'#ececec',
      borderRadius:8,
      alignContent:'center'
      
    },

    image:{
      width:70,
      height:70,
      alignSelf:'center',
      marginTop:8
    },

    userDetails:{
      alignSelf:'flex-start',
      marginLeft:20
    },

    save:{
      marginLeft:80
    },

    name:{
      fontWeight:'700',
      fontSize:16
    },

    role:{
      color:'#696969',
      fontSize:14
    },

    match:{
      backgroundColor:'#43CF51',
      padding:8,
      borderRadius:5,
      width:100,
      marginTop:10
    },

    percentage:{
      color:'#fff'
    },

    middleBar:{
      flexDirection:'row',
      display:'flex',
      padding:15,
    },

    left:{
      flexDirection:'row',
      display:'flex'
    },

    symbol:{
      width:20,
      height:20,
      borderRadius:20/2,
      backgroundColor:'#0ACF83'
    },

    rate:{
      marginLeft:8
    },

    dollar:{
      color:'#fff',
      alignSelf:'center',
      fontSize:15
    },

    price:{
      color:'#696969'
    },

    middle:{
      display:'flex',
      flexDirection:'row',
      marginLeft:30
    },
    right:{
      display:'flex',
      flexDirection:'row',
      marginLeft:45
    },

    BottomTile:{
      display:'flex',
    flexDirection:'row'    },

    skillsBox:{
      backgroundColor:'#FFEEE1',
      borderRadius:5,
      maxWidth:"25%",
      padding:5,
      marginLeft:10,
      marginVertical:8,
    },

    skills:{
      color:'#FF862D',
      alignSelf:'flex-start',
      marginLeft:2
    }
  });
  
  