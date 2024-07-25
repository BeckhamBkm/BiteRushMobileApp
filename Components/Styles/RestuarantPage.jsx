import { StyleSheet } from "react-native";
export const Restuarantstyles = StyleSheet.create({

    TopBackgroundImageContainer:{
      width: '100%',
      height:150,
      backgroundColor: 'purple'
    },

    headerText:{
        marginTop:10,
        textAlign: 'center',
        fontSize:20,
        fontWeight:'800'

    },

    tabList:{
      flexDirection:'row',
      marginTop:50,
      width: '100%',
      height:40,
    },
    
    RestuarantCircularPic: {
      position: 'absolute',
      marginTop: 110,
      width: 70,
      height: 70,
      borderRadius: 100,
      backgroundColor: 'blue',
      marginLeft:170,
    },
    
  });