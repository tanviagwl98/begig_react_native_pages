import {StyleSheet} from 'react-native';

export const styles =  StyleSheet.create({
    container: {
      backgroundColor: '#fff',
      display:'flex'

    },
    title:{
        fontWeight:'700',
        marginLeft:23,
        marginTop:10
    },


    card:{
        borderRadius:30,
        marginTop:12,
        marginLeft:8,
        borderWidth:2,
        borderColor:'#ececec',
        display:'flex',
        flexDirection:'row', 
        justifyContent:'space-between',
        alignItems:'center',
        padding:6,
        textAlignVertical:'center',
        height:55
    },

    tilesDirection:{
        display:'flex',
        flexDirection:'row',
        margin:15
    },

    icon:{
        width:80,
        padding:5,
        position:'absolute'
    },
    role:{
        color:'#696969',
        fontSize:15,
        alignSelf:'flex-start',
        marginTop:-2,
        marginLeft:30,
        padding:10,
    },
  });
  
  